import { Component, OnInit, AfterViewInit, OnDestroy } from '@angular/core';
declare var $: any; // Import jQuery

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit, AfterViewInit, OnDestroy {
  private dataTable: any;

  constructor() {}

  ngOnInit(): void {
    // Only needed for the filename of export files.
    // Normally set in the title tag of your page.document.title = 'Simple DataTable';
  }

  ngAfterViewInit(): void {
    // Define hidden columns
    const hCols = [3, 4];

    // DataTable initialization
    this.dataTable = $('#example').DataTable({
      dom:
        "<'row'<'col-sm-4'B><'col-sm-2'l><'col-sm-6'p<br/>i>>" +
        "<'row'<'col-sm-12'tr>>" +
        "<'row'<'col-sm-12'p<br/>i>>",
      paging: true,
      autoWidth: true,
      columnDefs: [
        {
          visible: false,
          targets: hCols
        }
      ],
      buttons: [
        {
          extend: 'colvis',
          collectionLayout: 'three-column',
          text: function() {
            const totCols = $('#example thead th').length;
            const hiddenCols = hCols.length;
            const shownCols = totCols - hiddenCols;
            return 'Columns (' + shownCols + ' of ' + totCols + ')';
          },
          prefixButtons: [
            {
              extend: 'colvisGroup',
              text: 'Show all',
              show: ':hidden'
            },
            {
              extend: 'colvisRestore',
              text: 'Restore'
            }
          ]
        },
        {
          extend: 'collection',
          text: 'Export',
          buttons: [
            {
              text: 'Excel',
              extend: 'excelHtml5',
              footer: false,
              exportOptions: {
                columns: ':visible'
              }
            },
            {
              text: 'CSV',
              extend: 'csvHtml5',
              fieldSeparator: ';',
              exportOptions: {
                columns: ':visible'
              }
            },
            {
              text: 'PDF Portrait',
              extend: 'pdfHtml5',
              message: '',
              exportOptions: {
                columns: ':visible'
              }
            },
            {
              text: 'PDF Landscape',
              extend: 'pdfHtml5',
              message: '',
              orientation: 'landscape',
              exportOptions: {
                columns: ':visible'
              }
            }
          ]
        }
      ],
      oLanguage: {
        oPaginate: {
          sNext: '<span class="pagination-default">&#x276f;</span>',
          sPrevious: '<span class="pagination-default">&#x276e;</span>'
        }
      },
      initComplete: (settings, json) => {
        // Adjust hidden columns counter text in button
        $('#example').on('column-visibility.dt', (e, settings, column, state) => {
          const visCols = $('#example thead tr:first th').length;
          // Below: The minus 2 because of the 2 extra buttons Show all and Restore
          const tblCols = $('.dt-button-collection li[aria-controls=example] a').length - 2;
          $('.buttons-colvis[aria-controls=example] span').html('Columns (' + visCols + ' of ' + tblCols + ')');
          e.stopPropagation();
        });
      }
    });
  }

  ngOnDestroy(): void {
    // Destroy the DataTable when the component is destroyed to prevent memory leaks
    if (this.dataTable) {
      this.dataTable.destroy();
    }
  }
}
