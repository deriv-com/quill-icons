import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedUserMinusMdRegularIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={20}
    height={24}
    viewBox='0 0 20 24'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M7 5c-1.094 0-2.062.594-2.625 1.5-.531.938-.531 2.094 0 3A3.03 3.03 0 0 0 7 11c1.063 0 2.031-.562 2.594-1.5.531-.906.531-2.062 0-3C9.03 5.594 8.063 5 7 5m0 7c-1.437 0-2.75-.75-3.469-2-.719-1.219-.719-2.75 0-4A4.04 4.04 0 0 1 7 4c1.406 0 2.719.781 3.438 2 .718 1.25.718 2.781 0 4A3.96 3.96 0 0 1 7 12m-1.437 2.5A4.575 4.575 0 0 0 1 19h12c-.062-2.469-2.094-4.5-4.594-4.5zm0-1h2.843C11.5 13.5 14 16 14 19.094c0 .5-.437.906-.937.906H.906A.907.907 0 0 1 0 19.094C0 16 2.469 13.5 5.563 13.5M13.5 11h6c.25 0 .5.25.5.5 0 .281-.25.5-.5.5h-6a.494.494 0 0 1-.5-.5c0-.25.219-.5.5-.5' />
    </g>
    <defs>
      <clipPath id='db272d1861a545f63b8fe3492f1b8814__a'>
        <path d='M0 0h20v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedUserMinusMdRegularIcon);
export default ForwardRef;
