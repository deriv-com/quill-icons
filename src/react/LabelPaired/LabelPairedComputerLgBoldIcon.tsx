import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedComputerLgBoldIcon = (
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
      <path d='M15 8.625H2.5a.64.64 0 0 0-.625.625V18c0 .352.273.625.625.625H15a.64.64 0 0 0 .625-.625V9.25c0-.312-.312-.625-.625-.625M2.5 20.5A2.47 2.47 0 0 1 0 18V9.25c0-1.367 1.094-2.5 2.5-2.5H15c1.367 0 2.5 1.133 2.5 2.5V18c0 1.406-1.133 2.5-2.5 2.5h-3.398l.625 1.875h1.835a.95.95 0 0 1 .938.938c0 .546-.43.937-.937.937H3.438c-.547 0-.938-.39-.938-.937 0-.508.39-.938.938-.938h1.796L5.86 20.5zm4.727 1.875h3.007L9.61 20.5H7.852zm13.398-13.75v1.25h2.5v-1.25zm0 3.125V13h2.5v-1.25zm2.5 3.125h-2.5v7.5h2.5zm-4.375-6.25c0-1.016.82-1.875 1.875-1.875h2.5c1.016 0 1.875.86 1.875 1.875v13.75c0 1.055-.86 1.875-1.875 1.875h-2.5a1.85 1.85 0 0 1-1.875-1.875zm3.125 10.938c-.547 0-.937-.391-.937-.938 0-.508.39-.937.937-.937a.95.95 0 0 1 .938.937c0 .547-.43.938-.938.938' />
    </g>
    <defs>
      <clipPath id='cbf34dff45191a0969f0f8aa405ec37f__a'>
        <path d='M0 0h25v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedComputerLgBoldIcon);
export default ForwardRef;
