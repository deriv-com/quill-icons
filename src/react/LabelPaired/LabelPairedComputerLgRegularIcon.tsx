import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedComputerLgRegularIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={25}
    height={30}
    viewBox='0 0 25 30'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M15 8H2.5c-.703 0-1.25.586-1.25 1.25V18c0 .703.547 1.25 1.25 1.25H15c.664 0 1.25-.547 1.25-1.25V9.25C16.25 8.586 15.664 8 15 8M2.5 20.5A2.47 2.47 0 0 1 0 18V9.25c0-1.367 1.094-2.5 2.5-2.5H15c1.367 0 2.5 1.133 2.5 2.5V18c0 1.406-1.133 2.5-2.5 2.5h-3.828l.82 2.5h2.383c.313 0 .625.313.625.625a.64.64 0 0 1-.625.625H3.125a.617.617 0 0 1-.625-.625c0-.312.273-.625.625-.625h2.344l.82-2.5zM6.797 23h3.867l-.82-2.5H7.617zM20.625 8a.64.64 0 0 0-.625.625V10.5h3.75V8.625c0-.312-.312-.625-.625-.625zM20 11.75V13h3.75v-1.25zm0 10.625c0 .352.273.625.625.625h2.5a.64.64 0 0 0 .625-.625V14.25H20zm-1.25-13.75c0-1.016.82-1.875 1.875-1.875h2.5c1.016 0 1.875.86 1.875 1.875v13.75c0 1.055-.86 1.875-1.875 1.875h-2.5a1.85 1.85 0 0 1-1.875-1.875zm3.125 10.938c-.547 0-.937-.391-.937-.938 0-.508.39-.937.937-.937a.95.95 0 0 1 .938.937c0 .547-.43.938-.938.938' />
    </g>
    <defs>
      <clipPath id='0db5a480fee230d3b9a185021edfadb7__a'>
        <path d='M0 0h25v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedComputerLgRegularIcon);
export default ForwardRef;
