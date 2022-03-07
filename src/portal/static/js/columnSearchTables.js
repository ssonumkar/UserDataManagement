/* Datatables footer search column */
$(document).ready(function() {
    // Setup - add a text input to each footer cell
    $('.columnSearchTable tfoot th').each( function () {
        var title = $(this).text();
        $(this).html( '<input type="text" placeholder="&#x1F50D; '+title+'" disabled="true"/>' );
    } );

    // DataTable
    var table = $('.columnSearchTable').DataTable();

    // Apply the search
    table.columns().every( function () {
        var that = this;

        $( 'input', this.footer() ).on( 'keyup change', function () {
            if ( that.search() !== this.value ) {
                that
                    .search( this.value )
                    .draw();
            }
        } );
    } );
} );
$(document).ready(function() {
    // Setup - add a text input to each footer cell
    $('.columnSearchTable1 tfoot th').each( function () {
        var title = $(this).text();
        $(this).html( '<input type="text" placeholder="&#x1F50D; '+title+'" disabled="true"/>' );
    } );

    // DataTable
    var table = $('.columnSearchTable1').DataTable();

    // Apply the search
    table.columns().every( function () {
        var that = this;

        $( 'input', this.footer() ).on( 'keyup change', function () {
            if ( that.search() !== this.value ) {
                that
                    .search( this.value )
                    .draw();
            }
        } );
    } );
} );
$(document).ready(function() {
    // Setup - add a text input to each footer cell
    $('.columnSearchTable2 tfoot th').each( function () {
        var title = $(this).text();
        $(this).html( '<input type="text" placeholder="&#x1F50D; '+title+'" disabled="true"/>' );
    } );

    // DataTable
    var table = $('.columnSearchTable2').DataTable();

    // Apply the search
    table.columns().every( function () {
        var that = this;

        $( 'input', this.footer() ).on( 'keyup change', function () {
            if ( that.search() !== this.value ) {
                that
                    .search( this.value )
                    .draw();
            }
        } );
    } );
} );
$(document).ready(function() {
    // Setup - add a text input to each footer cell
    $('.columnSearchTable3 tfoot th').each( function () {
        var title = $(this).text();
        $(this).html( '<input type="text" placeholder="&#x1F50D; '+title+'" disabled="true"/>' );
    } );

    // DataTable
    var table = $('.columnSearchTable3').DataTable();

    // Apply the search
    table.columns().every( function () {
        var that = this;

        $( 'input', this.footer() ).on( 'keyup change', function () {
            if ( that.search() !== this.value ) {
                that
                    .search( this.value )
                    .draw();
            }
        } );
    } );
} );
$(document).ready(function() {
    // Setup - add a text input to each footer cell
    $('.columnSearchTable4 tfoot th').each( function () {
        var title = $(this).text();
        $(this).html( '<input type="text" placeholder="&#x1F50D; '+title+'" disabled="true"/>' );
    } );

    // DataTable
    var table = $('.columnSearchTable4').DataTable();

    // Apply the search
    table.columns().every( function () {
        var that = this;

        $( 'input', this.footer() ).on( 'keyup change', function () {
            if ( that.search() !== this.value ) {
                that
                    .search( this.value )
                    .draw();
            }
        } );
    } );
} );
$(document).ready(function() {
    // Setup - add a text input to each footer cell
    $('.columnSearchTable5 tfoot th').each( function () {
        var title = $(this).text();
        $(this).html( '<input type="text" placeholder="&#x1F50D; '+title+'" disabled="true"/>' );
    } );

    // DataTable
    var table = $('.columnSearchTable5').DataTable();

    // Apply the search
    table.columns().every( function () {
        var that = this;

        $( 'input', this.footer() ).on( 'keyup change', function () {
            if ( that.search() !== this.value ) {
                that
                    .search( this.value )
                    .draw();
            }
        } );
    } );
} );

$(document).ready(function() {
    // Setup - add a text input to each footer cell
    $('.columnSearchTable6 tfoot th').each( function () {
        var title = $(this).text();
        $(this).html( '<input type="text" placeholder="&#x1F50D; '+title+'" disabled="true"/>' );
    } );

    // DataTable
    var table = $('.columnSearchTable6').DataTable();

    // Apply the search
    table.columns().every( function () {
        var that = this;

        $( 'input', this.footer() ).on( 'keyup change', function () {
            if ( that.search() !== this.value ) {
                that
                    .search( this.value )
                    .draw();
            }
        } );
    } );
} );
$(document).ready(function() {
    // Setup - add a text input to each footer cell
    $('.columnSearchTable7 tfoot th').each( function () {
        var title = $(this).text();
        $(this).html( '<input type="text" placeholder="&#x1F50D; '+title+'" disabled="true"/>' );
    } );

    // DataTable
    var table = $('.columnSearchTable7').DataTable();

    // Apply the search
    table.columns().every( function () {
        var that = this;

        $( 'input', this.footer() ).on( 'keyup change', function () {
            if ( that.search() !== this.value ) {
                that
                    .search( this.value )
                    .draw();
            }
        } );
    } );
} );
$(document).ready(function() {
    // Setup - add a text input to each footer cell
    $('.columnSearchTable8 tfoot th').each( function () {
        var title = $(this).text();
        $(this).html( '<input type="text" placeholder="&#x1F50D; '+title+'" disabled="true"/>' );
    } );

    // DataTable
    var table = $('.columnSearchTable8').DataTable();

    // Apply the search
    table.columns().every( function () {
        var that = this;

        $( 'input', this.footer() ).on( 'keyup change', function () {
            if ( that.search() !== this.value ) {
                that
                    .search( this.value )
                    .draw();
            }
        } );
    } );
} );
$(document).ready(function() {
    // Setup - add a text input to each footer cell
    $('.columnSearchTable9 tfoot th').each( function () {
        var title = $(this).text();
        $(this).html( '<input type="text" placeholder="&#x1F50D; '+title+'" disabled="true"/>' );
    } );

    // DataTable
    var table = $('.columnSearchTable9').DataTable();

    // Apply the search
    table.columns().every( function () {
        var that = this;

        $( 'input', this.footer() ).on( 'keyup change', function () {
            if ( that.search() !== this.value ) {
                that
                    .search( this.value )
                    .draw();
            }
        } );
    } );
} );
$(document).ready(function() {
    // Setup - add a text input to each footer cell
    $('.columnSearchTable10 tfoot th').each( function () {
        var title = $(this).text();
        $(this).html( '<input type="text" placeholder="&#x1F50D; '+title+'" disabled="true"/>' );
    } );

    // DataTable
    var table = $('.columnSearchTable10').DataTable();

    // Apply the search
    table.columns().every( function () {
        var that = this;

        $( 'input', this.footer() ).on( 'keyup change', function () {
            if ( that.search() !== this.value ) {
                that
                    .search( this.value )
                    .draw();
            }
        } );
    } );
} );
$(document).ready(function() {
    // Setup - add a text input to each footer cell
    $('.columnSearchTable11 tfoot th').each( function () {
        var title = $(this).text();
        $(this).html( '<input type="text" placeholder="&#x1F50D; '+title+'" disabled="true"/>' );
    } );

    // DataTable
    var table = $('.columnSearchTable11').DataTable();

    // Apply the search
    table.columns().every( function () {
        var that = this;

        $( 'input', this.footer() ).on( 'keyup change', function () {
            if ( that.search() !== this.value ) {
                that
                    .search( this.value )
                    .draw();
            }
        } );
    } );
} );
$(document).ready(function() {
    // Setup - add a text input to each footer cell
    $('.columnSearchTable12 tfoot th').each( function () {
        var title = $(this).text();
        $(this).html( '<input type="text" placeholder="&#x1F50D; '+title+'" disabled="true"/>' );
    } );

    // DataTable
    var table = $('.columnSearchTable12').DataTable();

    // Apply the search
    table.columns().every( function () {
        var that = this;

        $( 'input', this.footer() ).on( 'keyup change', function () {
            if ( that.search() !== this.value ) {
                that
                    .search( this.value )
                    .draw();
            }
        } );
    } );
} );
$(document).ready(function() {
    // Setup - add a text input to each footer cell
    $('.columnSearchTable13 tfoot th').each( function () {
        var title = $(this).text();
        $(this).html( '<input type="text" placeholder="&#x1F50D; '+title+'" disabled="true"/>' );
    } );

    // DataTable
    var table = $('.columnSearchTable13').DataTable();

    // Apply the search
    table.columns().every( function () {
        var that = this;

        $( 'input', this.footer() ).on( 'keyup change', function () {
            if ( that.search() !== this.value ) {
                that
                    .search( this.value )
                    .draw();
            }
        } );
    } );
} );
$(document).ready(function() {
    // Setup - add a text input to each footer cell
    $('.columnSearchTable14 tfoot th').each( function () {
        var title = $(this).text();
        $(this).html( '<input type="text" placeholder="&#x1F50D; '+title+'" disabled="true"/>' );
    } );

    // DataTable
    var table = $('.columnSearchTable14').DataTable();

    // Apply the search
    table.columns().every( function () {
        var that = this;

        $( 'input', this.footer() ).on( 'keyup change', function () {
            if ( that.search() !== this.value ) {
                that
                    .search( this.value )
                    .draw();
            }
        } );
    } );
} );
$(document).ready(function() {
    // Setup - add a text input to each footer cell
    $('.columnSearchTable15 tfoot th').each( function () {
        var title = $(this).text();
        $(this).html( '<input type="text" placeholder="&#x1F50D; '+title+'" disabled="true"/>' );
    } );

    // DataTable
    var table = $('.columnSearchTable15').DataTable();

    // Apply the search
    table.columns().every( function () {
        var that = this;

        $( 'input', this.footer() ).on( 'keyup change', function () {
            if ( that.search() !== this.value ) {
                that
                    .search( this.value )
                    .draw();
            }
        } );
    } );
} );
$(document).ready(function() {
    // Setup - add a text input to each footer cell
    $('.columnSearchTable16 tfoot th').each( function () {
        var title = $(this).text();
        $(this).html( '<input type="text" placeholder="&#x1F50D; '+title+'" disabled="true"/>' );
    } );

    // DataTable
    var table = $('.columnSearchTable16').DataTable();

    // Apply the search
    table.columns().every( function () {
        var that = this;

        $( 'input', this.footer() ).on( 'keyup change', function () {
            if ( that.search() !== this.value ) {
                that
                    .search( this.value )
                    .draw();
            }
        } );
    } );
} );
$(document).ready(function() {
    // Setup - add a text input to each footer cell
    $('.columnSearchTable17 tfoot th').each( function () {
        var title = $(this).text();
        $(this).html( '<input type="text" placeholder="&#x1F50D; '+title+'" disabled="true"/>' );
    } );

    // DataTable
    var table = $('.columnSearchTable17').DataTable();

    // Apply the search
    table.columns().every( function () {
        var that = this;

        $( 'input', this.footer() ).on( 'keyup change', function () {
            if ( that.search() !== this.value ) {
                that
                    .search( this.value )
                    .draw();
            }
        } );
    } );
} );
$(document).ready(function() {
    // Setup - add a text input to each footer cell
    $('.columnSearchTable18 tfoot th').each( function () {
        var title = $(this).text();
        $(this).html( '<input type="text" placeholder="&#x1F50D; '+title+'" disabled="true"/>' );
    } );

    // DataTable
    var table = $('.columnSearchTable18').DataTable();

    // Apply the search
    table.columns().every( function () {
        var that = this;

        $( 'input', this.footer() ).on( 'keyup change', function () {
            if ( that.search() !== this.value ) {
                that
                    .search( this.value )
                    .draw();
            }
        } );
    } );
} );
$(document).ready(function() {
    // Setup - add a text input to each footer cell
    $('.columnSearchTable19 tfoot th').each( function () {
        var title = $(this).text();
        $(this).html( '<input type="text" placeholder="&#x1F50D; '+title+'" disabled="true"/>' );
    } );

    // DataTable
    var table = $('.columnSearchTable19').DataTable();

    // Apply the search
    table.columns().every( function () {
        var that = this;

        $( 'input', this.footer() ).on( 'keyup change', function () {
            if ( that.search() !== this.value ) {
                that
                    .search( this.value )
                    .draw();
            }
        } );
    } );
} );
$(document).ready(function() {
    // Setup - add a text input to each footer cell
    $('.columnSearchTable20 tfoot th').each( function () {
        var title = $(this).text();
        $(this).html( '<input type="text" placeholder="&#x1F50D; '+title+'" disabled="true"/>' );
    } );

    // DataTable
    var table = $('.columnSearchTable20').DataTable();

    // Apply the search
    table.columns().every( function () {
        var that = this;

        $( 'input', this.footer() ).on( 'keyup change', function () {
            if ( that.search() !== this.value ) {
                that
                    .search( this.value )
                    .draw();
            }
        } );
    } );
} );
$(document).ready(function() {
    // Setup - add a text input to each footer cell
    $('.columnSearchTable21 tfoot th').each( function () {
        var title = $(this).text();
        $(this).html( '<input type="text" placeholder="&#x1F50D; '+title+'" disabled="true"/>' );
    } );

    // DataTable
    var table = $('.columnSearchTable21').DataTable();

    // Apply the search
    table.columns().every( function () {
        var that = this;

        $( 'input', this.footer() ).on( 'keyup change', function () {
            if ( that.search() !== this.value ) {
                that
                    .search( this.value )
                    .draw();
            }
        } );
    } );
} );
$(document).ready(function() {
    // Setup - add a text input to each footer cell
    $('.columnSearchTable22 tfoot th').each( function () {
        var title = $(this).text();
        $(this).html( '<input type="text" placeholder="&#x1F50D; '+title+'" disabled="true"/>' );
    } );

    // DataTable
    var table = $('.columnSearchTable22').DataTable();

    // Apply the search
    table.columns().every( function () {
        var that = this;

        $( 'input', this.footer() ).on( 'keyup change', function () {
            if ( that.search() !== this.value ) {
                that
                    .search( this.value )
                    .draw();
            }
        } );
    } );
} );
$(document).ready(function() {
    // Setup - add a text input to each footer cell
    $('.columnSearchTable23 tfoot th').each( function () {
        var title = $(this).text();
        $(this).html( '<input type="text" placeholder="&#x1F50D; '+title+'" disabled="true"/>' );
    } );

    // DataTable
    var table = $('.columnSearchTable23').DataTable();

    // Apply the search
    table.columns().every( function () {
        var that = this;

        $( 'input', this.footer() ).on( 'keyup change', function () {
            if ( that.search() !== this.value ) {
                that
                    .search( this.value )
                    .draw();
            }
        } );
    } );
} );
$(document).ready(function() {
    // Setup - add a text input to each footer cell
    $('.columnSearchTable24 tfoot th').each( function () {
        var title = $(this).text();
        $(this).html( '<input type="text" placeholder="&#x1F50D; '+title+'" disabled="true"/>' );
    } );

    // DataTable
    var table = $('.columnSearchTable24').DataTable();

    // Apply the search
    table.columns().every( function () {
        var that = this;

        $( 'input', this.footer() ).on( 'keyup change', function () {
            if ( that.search() !== this.value ) {
                that
                    .search( this.value )
                    .draw();
            }
        } );
    } );
} );
$(document).ready(function() {
    // Setup - add a text input to each footer cell
    $('.columnSearchTable25 tfoot th').each( function () {
        var title = $(this).text();
        $(this).html( '<input type="text" placeholder="&#x1F50D; '+title+'" disabled="true"/>' );
    } );

    // DataTable
    var table = $('.columnSearchTable25').DataTable();

    // Apply the search
    table.columns().every( function () {
        var that = this;

        $( 'input', this.footer() ).on( 'keyup change', function () {
            if ( that.search() !== this.value ) {
                that
                    .search( this.value )
                    .draw();
            }
        } );
    } );
} );