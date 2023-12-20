import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const LabelPairedPhoneSmRegularIcon = (
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
        d='m10.281 11.27 3.063 1.312c.237.11.419.283.547.52.109.218.136.455.082.71l-.657 3.063c-.145.547-.5.838-1.066.875h-.492a2.708 2.708 0 0 0-.383-.027c-2.133-.183-4.056-.83-5.77-1.942a12.258 12.258 0 0 1-4.074-4.347C.53 9.665.018 7.688 0 5.5c.036-.565.328-.92.875-1.066l3.063-.657a.963.963 0 0 1 .71.11c.237.11.41.282.52.52L6.48 7.468c.183.492.073.92-.328 1.285l-1.093.902a8.355 8.355 0 0 0 3.035 3.035l.902-1.093c.365-.401.793-.51 1.285-.328m1.969 5.605c.11 0 .182-.055.219-.164l.656-3.063c.018-.127-.027-.21-.137-.246L9.926 12.09c-.091-.037-.173-.018-.246.055l-.903 1.12c-.328.329-.701.393-1.12.192a9.024 9.024 0 0 1-3.364-3.363c-.2-.42-.137-.793.191-1.121l1.121-.903c.073-.073.092-.155.055-.246L4.348 4.762c-.055-.11-.137-.155-.246-.137l-3.063.656c-.11.037-.164.11-.164.219.018 2.115.538 4.029 1.559 5.742a11.195 11.195 0 0 0 4.074 4.074c1.713 1.021 3.627 1.54 5.742 1.559'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h14v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedPhoneSmRegularIcon);
export default ForwardRef;
