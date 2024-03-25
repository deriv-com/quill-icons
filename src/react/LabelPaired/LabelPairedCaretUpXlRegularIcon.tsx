import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedCaretUpXlRegularIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={15}
    height={36}
    viewBox='0 0 15 36'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='m7.219 13.64-5.625 5.297c-.094.094-.094.141-.094.235 0 .187.14.328.328.328h11.297c.188 0 .375-.14.375-.328a.26.26 0 0 0-.14-.235l-5.626-5.296A.26.26 0 0 0 7.5 13.5q-.21 0-.281.14m-1.032-1.124C6.517 12.188 6.985 12 7.5 12c.469 0 .938.188 1.266.516l5.625 5.343c.375.328.609.844.609 1.313C15 20.203 14.156 21 13.125 21H1.828A1.8 1.8 0 0 1 0 19.172c0-.469.188-.985.563-1.313z' />
    </g>
    <defs>
      <clipPath id='873975d7a77b393e67d213d61745d134__a'>
        <path d='M0 0h15v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedCaretUpXlRegularIcon);
export default ForwardRef;
