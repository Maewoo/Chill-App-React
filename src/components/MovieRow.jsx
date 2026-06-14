import React from 'react';

function MovieRow(props) {
  return (
    <div className="my-6 md:my-8 text-left px-4 md:px-12">
      {/* Judul Kategori Section */}
      <h3 className="text-white text-xl md:text-2xl font-bold mb-4">
        {props.categoryTitle}
      </h3>
    
      <div className="flex gap-3 md:gap-5 overflow-x-auto scrollbar-hide py-2 w-full snap-x">
        {props.children}
      </div>
    </div>
  );
}

export default MovieRow;