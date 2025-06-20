import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedFileCircleInfoLgRegularIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={23}
    height={30}
    viewBox='0 0 23 30'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M2.75 24.25h9.063c.39.469.82.898 1.289 1.25H2.75A2.47 2.47 0 0 1 .25 23V8c0-1.367 1.094-2.5 2.5-2.5h6.094c.469 0 .976.234 1.328.586l4.492 4.492c.352.352.586.86.586 1.328v1.367c-.469.118-.86.274-1.25.508V13H9.625a1.85 1.85 0 0 1-1.875-1.875V6.75h-5c-.703 0-1.25.586-1.25 1.25v15c0 .703.547 1.25 1.25 1.25m11.21-12.5c-.038-.078-.077-.195-.155-.273L9.273 6.945c-.078-.078-.195-.117-.273-.156v4.336c0 .352.273.625.625.625zm7.54 8.125c0-1.562-.86-2.969-2.187-3.75-1.368-.82-3.047-.82-4.375 0a4.29 4.29 0 0 0-2.188 3.75c0 1.602.82 3.008 2.188 3.79 1.328.82 3.007.82 4.374 0 1.329-.782 2.188-2.188 2.188-3.79m-10 0a5.58 5.58 0 0 1 2.813-4.844c1.718-1.015 3.867-1.015 5.624 0 1.72 1.016 2.813 2.852 2.813 4.844 0 2.031-1.094 3.867-2.812 4.883-1.758 1.015-3.907 1.015-5.625 0a5.6 5.6 0 0 1-2.813-4.883m5.625-1.25c-.547 0-.937-.39-.937-.937 0-.508.39-.938.937-.938a.95.95 0 0 1 .938.938c0 .546-.43.937-.938.937m-1.25 3.75c0-.312.273-.625.625-.625V20.5a.617.617 0 0 1-.625-.625c0-.312.273-.625.625-.625h.625c.313 0 .625.313.625.625v1.875c.313 0 .625.313.625.625a.64.64 0 0 1-.625.625H16.5a.617.617 0 0 1-.625-.625' />
    </g>
    <defs>
      <clipPath id='7bb7ed46ce9042fb4c2ae7f88cc816a1__a'>
        <path d='M0 0h23v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedFileCircleInfoLgRegularIcon);
export default ForwardRef;
