import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedEyeMdRegularIcon = (
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
      <path d='M3.656 8.25C2.312 9.5 1.406 11 1 12c.406 1 1.313 2.5 2.656 3.75S6.781 18 9 18c2.188 0 3.969-1 5.313-2.25S16.563 13 17 12c-.437-1-1.344-2.5-2.687-3.75C12.969 7 11.187 6 9 6 6.781 6 5 7 3.656 8.25M9 5c2.5 0 4.531 1.156 6 2.531 1.469 1.344 2.438 2.969 2.906 4.094.094.25.094.531 0 .781C17.438 13.5 16.47 15.125 15 16.5S11.5 19 9 19c-2.531 0-4.562-1.125-6.031-2.5S.53 13.5.063 12.406a1.12 1.12 0 0 1 0-.781C.53 10.5 1.5 8.875 2.969 7.531 4.438 6.156 6.469 5 9 5m-3 7a3.03 3.03 0 0 0 1.5 2.625c.906.531 2.063.531 3 0 .906-.562 1.5-1.531 1.5-2.625 0-1.062-.594-2.031-1.5-2.594-.937-.531-2.094-.531-3 0C6.563 9.97 6 10.937 6 12m7 0c0 1.438-.781 2.75-2 3.469-1.25.719-2.781.719-4 0A3.98 3.98 0 0 1 5 12c0-1.406.75-2.719 2-3.437 1.219-.72 2.75-.72 4 0 1.219.718 2 2.03 2 3.437' />
    </g>
    <defs>
      <clipPath id='89c7411903be5c2c67138660a4e4a856__a'>
        <path d='M0 0h18v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedEyeMdRegularIcon);
export default ForwardRef;
