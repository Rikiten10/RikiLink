<script>
    export let progress = 0;
  </script>
  
  <div class="w-full bg-gray-200 rounded-full h-2.5">
    <div 
      class="bg-blue-600 h-2.5 rounded-full transition-all duration-300" 
      style={`width: ${progress}%`}
    ></div>
  </div>