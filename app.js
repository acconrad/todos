window.TodoApp = ( function( d, ls ){
  'use strict';

  var todos, todoView, todoController;

  todoController = {
    addTodo: function( todo ){
      todos.push( todo );
      ls.setItem( 'todos', JSON.stringify( todos ) );
      todoView.render();
    }
  , getTodos: function(){
      return todos;
    }
  , init: function(){
      todos = JSON.parse( ls.getItem( 'todos' ) ) || [];
      todoView.init();
    }
  , removeTodo: function( id ){
      todos.splice( +id, 1 );
      ls.setItem( 'todos', JSON.stringify( todos ) );
      todoView.render();
    }
  , toString: function(){
      return todos.map( function( todo ){ return '-' + todo; } ).join( '\n' );
    }
  };

  todoView = {
    init: function(){
      d.getElementById( 'todo-add-item' ).addEventListener( 'click', function(){
        todoController.addTodo( d.getElementById( 'todo-item' ).value );
      });
      d.getElementById( 'todo-compose-email' ).addEventListener( 'click', function(){
        d.getElementById( 'email' ).classList.remove( 'hidden' );
        d.getElementById( 'email-body' ).value = todoController.toString();
      });
      todoView.render();
    }
  , render: function(){
      var todoList = d.getElementById( 'todo-items' )
        , nodes = d.createDocumentFragment()
        , el, removeButton;

      todoList.innerHTML = '';

      todoController.getTodos().forEach(function( todo, index ){
        el = d.createElement( 'li' );
        el.dataset.id = index;

        removeButton = d.createElement( 'button' );
        removeButton.innerHTML = 'x';
        removeButton.classList.add( 'todo-remove-item' );

        el.appendChild( d.createTextNode( todo ) );
        el.appendChild( removeButton );

        nodes.appendChild( el );

        removeButton.addEventListener( 'click', function( event ){
          todoController.removeTodo( event.target.parentNode.dataset.id );
        });
      });
      todoList.appendChild( nodes );
    }
  };

  return { init: todoController.init };
})( document, localStorage );

TodoApp.init();
