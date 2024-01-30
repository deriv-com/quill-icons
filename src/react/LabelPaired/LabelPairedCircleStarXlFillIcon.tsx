import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedCircleStarXlFillIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={24}
    height={36}
    viewBox='0 0 24 36'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M0 18q.047-3.28 1.594-6Q3.187 9.282 6 7.594 8.859 6 12 6t6 1.594Q20.813 9.28 22.406 12q1.548 2.72 1.594 6-.046 3.282-1.594 6-1.593 2.719-4.406 4.406Q15.141 30 12 30t-6-1.594Q3.187 26.72 1.594 24 .047 21.282 0 18m12-7.125q-.468 0-.656.422l-1.688 3.422-3.797.562q-.468.095-.609.516t.188.75l2.718 2.719-.656 3.75a.78.78 0 0 0 .328.75q.375.234.797.047L12 22.03l3.422 1.782q.375.187.75-.047a.78.78 0 0 0 .328-.75l-.656-3.75 2.765-2.672q.282-.375.188-.797-.187-.422-.61-.516l-3.796-.562-1.735-3.422q-.188-.422-.656-.422' />
    </g>
    <defs>
      <clipPath id='cfb514d717c55d22435abb332a29ae0e__a'>
        <path d='M0 0h24v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedCircleStarXlFillIcon);
export default ForwardRef;
