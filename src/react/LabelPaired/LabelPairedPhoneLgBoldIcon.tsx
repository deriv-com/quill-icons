import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const LabelPairedPhoneLgBoldIcon = (
  { iconSize = 'md', ...props }: QuillSvgProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 20 30'
    {...sizes[iconSize]}
    role='img'
    ref={ref}
    {...props}
  >
    <g clipPath='url(#a)'>
      <path
        fillOpacity={0.72}
        d='m14.688 16.242 4.374 1.875c.339.156.6.404.782.742.156.313.195.664.117 1.055l-.938 4.375c-.208.755-.716 1.159-1.523 1.211h-.703l-1.172-.078c-2.969-.365-5.625-1.341-7.969-2.93A17.535 17.535 0 0 1 2.11 16.32C.73 13.82.026 11.047 0 8c.052-.807.469-1.315 1.25-1.523l4.375-.938a1.376 1.376 0 0 1 1.016.156c.338.157.586.404.742.742l1.875 4.376c.26.703.104 1.315-.469 1.835l-1.562 1.29a11.935 11.935 0 0 0 4.336 4.335l1.289-1.562c.52-.573 1.132-.73 1.835-.469m2.578 7.383.82-3.867-3.906-1.68-1.172 1.406a1.956 1.956 0 0 1-1.094.625 1.737 1.737 0 0 1-1.289-.195 14.156 14.156 0 0 1-5.04-5.039c-.207-.417-.272-.833-.194-1.25.078-.443.286-.82.625-1.133l1.406-1.133-1.68-3.945-3.867.86c.078 2.838.807 5.403 2.188 7.695a15.288 15.288 0 0 0 5.468 5.469c2.292 1.38 4.87 2.109 7.735 2.187'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h20v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedPhoneLgBoldIcon);
export default ForwardRef;
