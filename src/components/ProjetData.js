import React from 'react';

const ProjetData = () => {
  return (
    <div>
        <iframe 
          title="House prices in the U.K." 
          aria-label="Lignes multiples" 
          id="datawrapper-chart-RFbPo" 
          src="https://datawrapper.dwcdn.net/RFbPo/1/" 
          scrolling="no" 
          frameBorder="0" 
          style={{ width: '100%', border: 'none' }} 
          height="923" 
          data-external="1"
        ></iframe>
        <script type="text/javascript">
          {`!function(){"use strict".window.addEventListener("message",function(a){if(void 0!==a.data["datawrapper-height"]){var e=document.querySelectorAll("iframe");for(var t in a.data["datawrapper-height"])for(var r=0;r<e.length;r++)if(e[r].contentWindow===a.source){var i=a.data["datawrapper-height"][t]+"px";e[r].style.height=i}}})}();`}
        </script>
    </div>
  );
}

export default ProjetData;
