import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedSquareCheckMdRegularIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={14}
    height={24}
    viewBox='0 0 14 24'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M2 6c-.562 0-1 .469-1 1v10c0 .563.438 1 1 1h10c.531 0 1-.437 1-1V7c0-.531-.469-1-1-1zM0 7c0-1.094.875-2 2-2h10c1.094 0 2 .906 2 2v10c0 1.125-.906 2-2 2H2c-1.125 0-2-.875-2-2zm10.344 3.375-4 4a.53.53 0 0 1-.719 0l-2-2a.53.53 0 0 1 0-.719.53.53 0 0 1 .719 0L6 13.312l3.625-3.656a.53.53 0 0 1 .719 0 .53.53 0 0 1 0 .719' />
    </g>
    <defs>
      <clipPath id='b6b56789bbb3dca6802467144136d7cc__a'>
        <path d='M0 0h14v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedSquareCheckMdRegularIcon);
export default ForwardRef;
