import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedPresentationScreenMdRegularIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={18}
    height={24}
    viewBox='0 0 18 24'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M.5 4h17c.25 0 .5.25.5.5 0 .281-.25.5-.5.5H.5a.494.494 0 0 1-.5-.5c0-.25.219-.5.5-.5M1 6h1v7c0 .563.438 1 1 1h12c.531 0 1-.437 1-1V6h1v7c0 1.125-.906 2-2 2H9.5v1.313l2.844 2.843a.53.53 0 0 1 0 .719.53.53 0 0 1-.719 0L9 17.219l-2.656 2.656a.53.53 0 0 1-.719 0 .53.53 0 0 1 0-.719L8.5 16.313V15H3c-1.125 0-2-.875-2-2z' />
    </g>
    <defs>
      <clipPath id='ec124df65d885d796f7b406d28f95e5f__a'>
        <path d='M0 0h18v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedPresentationScreenMdRegularIcon);
export default ForwardRef;
