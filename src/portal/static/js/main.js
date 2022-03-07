/*
Sidebar tree functionality
*/
$(document).ready(function () {
    $('label.tree-toggler').click(function () {
        $(this).parent().children('ul.tree').toggle(300);
    });

    $('label.tree-toggler').parent().children('ul.tree').toggle();
});


/*
Clickable table functionality
*/
jQuery(document).ready(function($) {
    $(".clickable-row").click(function(e) {
        console.log("Event in main.js", e);

        if ($(e.target).hasClass("details-control") == false && $(e.target).hasClass("show_vms") == false)
            window.location = $(this).data("href");
    });
});



/*
Sortable table functionality
*/

$(document).ready(function() {
  $('.listDataTable').DataTable( {
      "pageLength": 10,
      "order": [[ 0, "asc" ]],
       dom: 'Bfrtip',
        buttons: [
            'copy', 'csv', 'excel', 'pdf'
        ]
  });

  $('.canary_vm_list_table').DataTable( {
      "pageLength": 50,
      "order": [[ 0, "asc" ],[1, "asc"]],
       dom: 'Bfrtip',
        buttons: [
            'copy', 'csv', 'excel', 'pdf'
        ]
  });

  $('.vm_list_table').DataTable( {
      "pageLength": 10,
      "order": [[ 1, "asc" ]],
       dom: 'Bfrtip',
        buttons: [
            'copy', 'csv', 'excel', 'pdf'
        ]
  });


  $('.ftDataTable').DataTable( {
      "pageLength": 10,
      "order": [[ 0, "desc" ]],
       dom: 'Bfrtip',
        buttons: [
            'copy', 'csv', 'excel', 'pdf'
        ]
  });

  $('.ftDataTableHealth').DataTable( {
      "pageLength": 10,
        dom: 'Bfrtip',
        buttons: [
            'copy', 'csv', 'excel', 'pdf'
        ]
  });
//  $('.ftDataTable').DataTable();

//  $('.timestamp_table').dataTable( {
//      "pageLength": 10
//  });
  $('.timestamp_table').DataTable({
        "order": [[ 0, "desc" ]],
        "pageLength": 10,
        dom: 'Bfrtip',
        buttons: [
            'copy', 'csv', 'excel', 'pdf'
        ],
        "fnRowCallback": function( nRow, aData, iDisplayIndex, iDisplayIndexFull ) {
            if ( aData[1] == "Error" )
            {
                $('td', nRow).addClass('colors-error');


            }
        }
    } );

      $('.home_table').DataTable({
        "order": [[ 0, "asc" ]],
        "pageLength": 50,
        dom: 'Bfrtip',
        "fnRowCallback": function( nRow, aData, iDisplayIndex, iDisplayIndexFull ) {
            if ( aData[1] == "Error" )
            {
                $('td', nRow).addClass('colors-error');


            }
        }
    } );

      $('.pod_table').DataTable({
        "order": [[ 0, "asc" ]],
        "pageLength": 50,
        dom: 'Bfrtip',
        buttons: [
            'copy', 'csv', 'excel', 'pdf'
        ],
        "fnRowCallback": function( nRow, aData, iDisplayIndex, iDisplayIndexFull ) {
            if ( aData[1] == "Error" )
            {
                $('td', nRow).addClass('colors-error');


            }
        }
    } );

  $('.icinga-table').DataTable({
        "order": [[ 0, "asc" ]],
        "pageLength": 10,
        dom: 'Bfrtip',
        buttons: [
            'copy', 'csv', 'excel', 'pdf'
        ],
        "fnRowCallback": function( nRow, aData, iDisplayIndex, iDisplayIndexFull ) {
        }
  } );

});

//
//$(document).ready(function() {
//    // Setup - add a text input to each footer cell
//    $('.columnSearchTable tfoot th').each( function () {
//        var title = $(this).text();
//        $(this).html( '<input type="text" class="form-control"  placeholder="&#x1F50D; '+title+'" disabled/>' );
//    } );
//
//    // DataTable
//    var table = $('.columnSearchTable').DataTable();
//
//    // Apply the search
//    table.columns().every( function () {
//        var that = this;
//
//        $( 'input', this.footer() ).on( 'keyup change', function () {
//            if ( that.search() !== this.value ) {
//                that
//                    .search( this.value )
//                    .draw();
//            }
//        } );
//    } );
//} );


/*
Filterable table functionality
*/

$(document).ready(function(){
    $('.filterable .btn-filter').click(function(){
        var $panel = $(this).parents('.filterable'),
        $filters = $panel.find('.filters input'),
        $tbody = $panel.find('.table tbody'),
        $therows = $panel.find('.filters');
        if ($filters.prop('disabled') == true) {
            $filters.prop('disabled', false);
            $therows.attr('style', '');
            $filters.first().focus();
        } else {
            $filters.val('').prop('disabled', true);
            $tbody.find('.no-result').remove();
            $tbody.find('tr').show();
            $therows.attr('style', 'display:none;');
        }
    });
});


$(document).ready(function(){
    $('#userInfo').tooltip();
    $('.custom_tool_tip').tooltip();
});


//    $('.filterable .filters input').keyup(function(e){
//        /* Ignore tab key */
//        var code = e.keyCode || e.which;
//        if (code == '9') return;
//        /* Useful DOM data and selectors */
//        var $input = $(this),
//        inputContent = $input.val().toLowerCase(),
//        $panel = $input.parents('.filterable'),
//        column = $panel.find('.filters th').index($input.parents('th')),
//        $table = $panel.find('.table'),
//        $rows = $table.find('tbody tr');
//        /* Dirtiest filter function ever ;) */
//        var $filteredRows = $rows.filter(function(){
//            var value = $(this).find('td').eq(column).text().toLowerCase();
//            return value.indexOf(inputContent) === -1;
//        });
//        /* Clean previous no-result if exist */
//        $table.find('tbody .no-result').remove();
//        /* Show all rows, hide filtered ones (never do that outside of a demo ! xD) */
//        $rows.show();
//        $filteredRows.hide();
//        /* Prepend no-result row if all rows are filtered */
//        if ($filteredRows.length === $rows.length) {
//            $table.find('tbody').prepend($('<tr class="no-result text-center"><td colspan="'+ $table.find('.filters th').length +'">No result found</td></tr>'));
//        }
//    });
//});
$(document).ready(function(){
$('#confirm-delete').on('show.bs.modal', function(e) {
    $(this).find('.btn-ok').attr('href', $(e.relatedTarget).data('href'));
});
});


// Do not require double click of dropdown in navbar
//$(document).ready(function(){
//$('.dropdown-toggle').click(function(e) {
//    e.preventDefault();
//    e.stopPropagation();
//
//    return false;
//});
//});

$(function() {
    if($("#dateRangeInt").length){
        var start = moment().subtract(2, 'days');
        var end = moment();
        if ($('input[name="dateRangeInt"]').val() == "None" || $('input[name="dateRangeInt"]').val() == ""){
            start = moment().subtract(2, 'days');
            end = moment();
        }
        else {
            start = $('input[name="dateRangeInt"]').val().split(" - ")[0]
            end = $('input[name="dateRangeInt"]').val().split(" - ")[1]
        }

        function cb(start, end) {
            $('input[name="dateRangeInt"]').html(start.format('MM/DD/YYYY h:mm A') + ' - ' + end.format('MM/DD/YYYY h:mm A'));
        }

        $('input[name="dateRangeInt"]').daterangepicker({
            dateLimit: {
                "days": 600
            },
            startDate: start,
            endDate: end,
            timePicker: true,
            timePickerIncrement: 30,
            locale: {
                format: 'MM/DD/YYYY h:mm A'
            },
            ranges: {
               'Today': [moment().subtract(1, 'days'), moment()],
               'Yesterday': [moment().subtract(2, 'days'), moment().subtract(1, 'days')],
               'Last 7 Days': [moment().subtract(6, 'days'), moment()],
               'Last 30 Days': [moment().subtract(29, 'days'), moment()],
               'Last 60 Days': [moment().subtract(59, 'days'), moment()],
               'Last 90 Days': [moment().subtract(89, 'days'), moment()],
               'Last 365 Days': [moment().subtract(364, 'days'), moment()],
               'This Month': [moment().startOf('month'), moment().endOf('month')],
               'Last Month': [moment().subtract(1, 'month').startOf('month'), moment().subtract(1, 'month').endOf('month')]
            }
        }, cb);

        cb(start, end);
    }

});