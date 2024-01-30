import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedThreeLgRegularIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={13}
    height={30}
    viewBox='0 0 13 30'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M.25 7.375q.039-.585.625-.625H11.5q.43 0 .586.39a.7.7 0 0 1-.156.704L4.977 14.25H7.75q2.109.04 3.555 1.445 1.406 1.446 1.445 3.555-.04 2.109-1.445 3.555Q9.859 24.21 7.75 24.25H3.727a3.7 3.7 0 0 1-1.954-.547A3.53 3.53 0 0 1 .406 22.18l-.078-.157q-.234-.547.274-.82.507-.234.82.274l.078.156Q2.242 22.96 3.727 23H7.75q1.602-.038 2.656-1.094 1.055-1.054 1.094-2.656-.039-1.602-1.094-2.656Q9.352 15.539 7.75 15.5H3.375q-.43 0-.586-.39a.7.7 0 0 1 .156-.704L9.898 8H.875Q.29 7.961.25 7.375' />
    </g>
    <defs>
      <clipPath id='786cb67b16205440cc6dc0831acf2c33__a'>
        <path d='M0 0h13v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedThreeLgRegularIcon);
export default ForwardRef;
