import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedMoneyBillSmBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={16}
    height={22}
    viewBox='0 0 16 22'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M3.188 6.813q-.028.738-.52 1.23t-1.23.52v4.374q.738.028 1.23.52t.52 1.23h9.625q.026-.738.519-1.23.492-.492 1.23-.52V8.564q-.738-.028-1.23-.52t-.52-1.23zM.124 7.25q.027-.738.52-1.23.492-.493 1.23-.52h12.25q.738.027 1.23.52.493.492.52 1.23v7q-.027.738-.52 1.23-.492.493-1.23.52H1.875q-.738-.027-1.23-.52-.493-.492-.52-1.23zM8 8.125q.71 0 1.313.355.6.356.957.957.355.63.355 1.313a2.63 2.63 0 0 1-1.312 2.27A2.53 2.53 0 0 1 8 13.375q-.71 0-1.312-.355a2.631 2.631 0 0 1-1.312-2.27 2.63 2.63 0 0 1 1.311-2.27A2.53 2.53 0 0 1 8 8.125' />
    </g>
    <defs>
      <clipPath id='f8c8cf166a3b481b6736ca52a4289b19__a'>
        <path d='M0 0h16v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedMoneyBillSmBoldIcon);
export default ForwardRef;
