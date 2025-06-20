import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedCaretUpSmRegularIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={9}
    height={22}
    viewBox='0 0 9 22'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='m4.336 8.207-3.281 3.09C1 11.352 1 11.379 1 11.434c0 .109.082.191.191.191h6.59c.11 0 .219-.082.219-.191a.15.15 0 0 0-.082-.137l-3.281-3.09a.15.15 0 0 0-.137-.082q-.123 0-.164.082m-.602-.656c.192-.192.465-.301.766-.301.273 0 .547.11.738.3l3.282 3.118c.218.191.355.492.355.766 0 .601-.492 1.066-1.094 1.066h-6.59a1.05 1.05 0 0 1-1.066-1.066c0-.274.11-.575.328-.766z' />
    </g>
    <defs>
      <clipPath id='99bd677e0f59e6c6641289da426031a4__a'>
        <path d='M0 0h9v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedCaretUpSmRegularIcon);
export default ForwardRef;
