import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const LabelPairedCircleFiveLgBoldIcon = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={20}
    height={30}
    viewBox='0 0 20 30'
    role='img'
    ref={ref}
    {...props}
  >
    <g clipPath='url(#a)'>
      <path
        fillOpacity={0.72}
        d='M10 7.375c-1.484 0-2.839.365-4.063 1.094-1.223.703-2.213 1.693-2.968 2.969A8.062 8.062 0 0 0 1.875 15.5c0 1.432.365 2.787 1.094 4.063.755 1.276 1.745 2.265 2.969 2.968 1.223.73 2.578 1.094 4.062 1.094 1.484 0 2.838-.365 4.063-1.094 1.223-.703 2.213-1.692 2.968-2.968a8.061 8.061 0 0 0 1.094-4.063 8.061 8.061 0 0 0-1.094-4.063c-.755-1.275-1.744-2.265-2.968-2.968-1.225-.73-2.579-1.094-4.063-1.094ZM10 25.5c-1.823-.026-3.49-.469-5-1.328-1.51-.886-2.734-2.11-3.672-3.672C.443 18.912 0 17.245 0 15.5s.443-3.412 1.328-5C2.266 8.937 3.49 7.714 5 6.828c1.51-.86 3.177-1.302 5-1.328 1.823.026 3.49.469 5 1.328 1.51.886 2.734 2.11 3.672 3.672.885 1.588 1.328 3.255 1.328 5s-.443 3.412-1.328 5c-.938 1.563-2.162 2.787-3.672 3.672-1.51.86-3.177 1.302-5 1.328Zm-1.875-15h4.063c.572.052.885.365.937.938-.052.572-.365.885-.938.937h-3.28l-.313 1.68 2.422.273a3.114 3.114 0 0 1 1.953 1.016c.495.573.755 1.263.781 2.07-.026.885-.325 1.615-.898 2.188-.6.572-1.329.872-2.188.898H9.258c-1.146-.026-2.044-.508-2.695-1.445l-.157-.235c-.26-.494-.169-.924.274-1.289.494-.26.924-.169 1.289.274l.156.234c.286.39.664.586 1.133.586h1.406c.339 0 .625-.117.86-.352.234-.234.351-.52.351-.859-.052-.677-.417-1.08-1.094-1.21l-3.398-.392a.824.824 0 0 1-.625-.39.972.972 0 0 1-.196-.703l.625-3.438c.13-.495.443-.755.938-.781Z'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h20v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedCircleFiveLgBoldIcon);
export default ForwardRef;
