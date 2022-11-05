import React from "react";

const PageName = ({ pagename }) => {
  return (
    <div className='py-2 text-lg font-medium text-blue-for-admin'>
      {pagename}
    </div>
  );
};

export default PageName;
