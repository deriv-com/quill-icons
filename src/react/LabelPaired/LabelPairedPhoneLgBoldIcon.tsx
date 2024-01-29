import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedPhoneLgBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={20}
    height={30}
    viewBox='0 0 20 30'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='m14.688 16.242 4.374 1.875q.509.235.782.742.234.469.117 1.055l-.938 4.375q-.312 1.133-1.523 1.211h-.703l-1.172-.078q-4.453-.547-7.969-2.93A17.54 17.54 0 0 1 2.11 16.32Q.04 12.57 0 8q.078-1.21 1.25-1.523l4.375-.938a1.38 1.38 0 0 1 1.016.156q.508.235.742.742l1.875 4.376q.39 1.055-.469 1.835l-1.562 1.29a11.94 11.94 0 0 0 4.336 4.335l1.289-1.562q.78-.86 1.835-.469m2.578 7.383.82-3.867-3.906-1.68-1.172 1.406a1.96 1.96 0 0 1-1.094.625 1.74 1.74 0 0 1-1.289-.195 14.16 14.16 0 0 1-5.04-5.039q-.31-.625-.194-1.25.117-.664.625-1.133l1.406-1.133-1.68-3.945-3.867.86q.117 4.257 2.188 7.695a15.3 15.3 0 0 0 5.468 5.469q3.438 2.07 7.735 2.187' />
    </g>
    <defs>
      <clipPath id='662aee0a5d9712c826c49536b03d744f__a'>
        <path d='M0 0h20v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedPhoneLgBoldIcon);
export default ForwardRef;
