import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedLocationCrosshairsSlashXlFillIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={30}
    height={36}
    viewBox='0 0 30 36'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='m1.781 6.281 6.844 5.344A9.35 9.35 0 0 1 13.5 9.141V7.5c0-.797.656-1.5 1.5-1.5.797 0 1.5.703 1.5 1.5v1.64a9.07 9.07 0 0 1 7.36 7.36h1.64c.797 0 1.5.703 1.5 1.5 0 .844-.703 1.5-1.5 1.5h-1.64a9.1 9.1 0 0 1-1.172 3.14l6.843 5.391c.516.375.61 1.078.188 1.547-.375.516-1.078.61-1.547.188L.422 8.016c-.516-.375-.61-1.078-.188-1.547.375-.516 1.079-.61 1.547-.188m9.235 7.219 1.828 1.406c.61-.375 1.36-.656 2.156-.656A3.76 3.76 0 0 1 18.75 18c0 .469-.094.938-.281 1.36l1.828 1.406A5.9 5.9 0 0 0 21 18c0-3.281-2.719-6-6-6a6 6 0 0 0-3.984 1.5m5.765 10.266 2.625 2.062c-.89.516-1.875.89-2.906 1.078V28.5c0 .844-.703 1.5-1.5 1.5a1.48 1.48 0 0 1-1.5-1.5v-1.594c-3.797-.656-6.75-3.61-7.406-7.36H4.5a1.51 1.51 0 0 1-1.5-1.5c0-.843.656-1.5 1.5-1.5h1.594c.047-.374.14-.702.234-1.03L9 17.625V18c0 3.328 2.672 6 6 6 .61 0 1.219-.094 1.781-.234' />
    </g>
    <defs>
      <clipPath id='ec335f0e00c59e265c678a680a0ce4b7__a'>
        <path d='M0 0h30v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedLocationCrosshairsSlashXlFillIcon);
export default ForwardRef;
