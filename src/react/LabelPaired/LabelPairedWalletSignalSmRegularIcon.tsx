import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedWalletSignalSmRegularIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={18}
    height={22}
    viewBox='0 0 18 22'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M.25 6.813c0-1.204.957-2.188 2.188-2.188h10.5a.47.47 0 0 1 .437.438.45.45 0 0 1-.437.437h-10.5c-.739 0-1.313.602-1.313 1.313v7.875c0 .738.574 1.312 1.313 1.312h7.437v.875H2.438A2.16 2.16 0 0 1 .25 14.688zm2.625 0a.45.45 0 0 1 .438-.438h8.75c1.203 0 2.187.984 2.187 2.188v1.914c-.3-.137-.574-.22-.875-.329V8.59c0-.738-.602-1.313-1.312-1.313h-8.75a.45.45 0 0 1-.438-.437zm7.875 4.375a.45.45 0 0 1 .438-.438c3.609 0 6.562 2.953 6.562 6.563a.45.45 0 0 1-.437.437.43.43 0 0 1-.438-.437c0-3.118-2.57-5.688-5.687-5.688a.43.43 0 0 1-.438-.437m0 2.624a.45.45 0 0 1 .438-.437c2.16 0 3.937 1.777 3.937 3.938a.45.45 0 0 1-.437.437.43.43 0 0 1-.438-.437c0-1.668-1.395-3.063-3.062-3.063a.43.43 0 0 1-.438-.437m0 3.063c0-.465.383-.875.875-.875a.9.9 0 0 1 .875.875c0 .492-.41.875-.875.875a.864.864 0 0 1-.875-.875' />
    </g>
    <defs>
      <clipPath id='111622c04f20e11fd43b21629839f3e6__a'>
        <path d='M0 0h18v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedWalletSignalSmRegularIcon);
export default ForwardRef;
