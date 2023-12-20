import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const LabelPairedPhoneSmBoldIcon = (
  { iconSize = 'md', ...props }: QuillSvgProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 14 22'
    {...sizes[iconSize]}
    role='img'
    ref={ref}
    {...props}
  >
    <g clipPath='url(#a)'>
      <path
        fillOpacity={0.72}
        d='m10.281 11.27 3.063 1.312c.237.11.419.283.547.52.109.218.136.464.082.738l-.657 3.062c-.145.529-.5.811-1.066.848h-.492l-.82-.055c-2.079-.255-3.938-.939-5.579-2.05a12.274 12.274 0 0 1-3.882-4.32C.51 9.574.018 7.632 0 5.5c.036-.565.328-.92.875-1.066l3.063-.657a.963.963 0 0 1 .71.11c.237.11.41.282.52.52L6.48 7.468c.183.492.073.92-.328 1.285l-1.093.902a8.355 8.355 0 0 0 3.035 3.035l.902-1.093c.365-.401.793-.51 1.285-.328m1.805 5.168.574-2.707-2.734-1.176-.82.984a1.37 1.37 0 0 1-.766.438c-.31.072-.61.027-.902-.137a9.91 9.91 0 0 1-3.528-3.527 1.38 1.38 0 0 1 .3-1.668l.985-.793L4.02 5.09l-2.707.601c.054 1.987.565 3.783 1.53 5.387a10.7 10.7 0 0 0 3.829 3.828c1.604.966 3.409 1.477 5.414 1.531'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h14v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedPhoneSmBoldIcon);
export default ForwardRef;
