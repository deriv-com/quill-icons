import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedExclamationLgFillIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={3}
    height={30}
    viewBox='0 0 3 30'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M2.75 8v10c0 .703-.586 1.25-1.25 1.25-.703 0-1.25-.547-1.25-1.25V8c0-.664.547-1.25 1.25-1.25.664 0 1.25.586 1.25 1.25M1.5 24.25c-.586 0-1.094-.273-1.367-.781-.274-.469-.274-1.055 0-1.563a1.58 1.58 0 0 1 1.367-.781 1.56 1.56 0 0 1 1.328.781c.274.508.274 1.094 0 1.563a1.48 1.48 0 0 1-1.328.781' />
    </g>
    <defs>
      <clipPath id='a765fc6d394e6998600cfb60fd15a0f3__a'>
        <path d='M0 0h3v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedExclamationLgFillIcon);
export default ForwardRef;
