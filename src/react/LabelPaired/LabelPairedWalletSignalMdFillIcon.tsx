import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedWalletSignalMdFillIcon = (
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
      <path d='M0 7c0-1.094.875-2 2-2h12c.531 0 1 .469 1 1 0 .563-.469 1-1 1H2.5c-.281 0-.5.25-.5.5 0 .281.219.5.5.5H14c1.094 0 2 .906 2 2v1.688A8.2 8.2 0 0 0 12.75 11c-.969 0-1.75.813-1.75 1.75V19H2c-1.125 0-2-.875-2-2zm12 5.75a.74.74 0 0 1 .75-.75c4 0 7.25 3.25 7.25 7.25a.74.74 0 0 1-.75.75.72.72 0 0 1-.75-.75c0-3.156-2.594-5.75-5.75-5.75a.72.72 0 0 1-.75-.75m0 3a.74.74 0 0 1 .75-.75A4.254 4.254 0 0 1 17 19.25a.74.74 0 0 1-.75.75.72.72 0 0 1-.75-.75c0-1.5-1.25-2.75-2.75-2.75a.72.72 0 0 1-.75-.75M12 19c0-.531.438-1 1-1 .531 0 1 .469 1 1 0 .563-.469 1-1 1-.562 0-1-.437-1-1' />
    </g>
    <defs>
      <clipPath id='0adc525f874bfd275e0ab86c52b51ea0__a'>
        <path d='M0 0h20v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedWalletSignalMdFillIcon);
export default ForwardRef;
