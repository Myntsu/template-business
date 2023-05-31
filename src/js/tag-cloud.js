const myTags = [
    'Brand', 'Brand', 'Brand',
    'Brand', 'Brand', 'Brand',
    'Brand', 'Brand', 'Brand',
    'Brand', 'Brand', 'Brand',
  ];
  
  var tagCloud = TagCloud('.content', myTags, {
    radius: 175,
    maxSpeed: 'fast',
    initSpeed: 'normal',
    direction: 90,
    keep: true,
    useContainerInlineStyles: true,
    useItemInlineStyles: true,
    containerClass: 'tagcloud',
    itemClass: 'tagcloud--item',
  });