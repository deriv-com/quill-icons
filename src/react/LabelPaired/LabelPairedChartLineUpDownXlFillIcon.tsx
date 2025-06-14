import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedChartLineUpDownXlFillIcon = (
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
      <path d='M3 9v15.75c0 .422.328.75.75.75H22.5c.797 0 1.5.703 1.5 1.5 0 .844-.703 1.5-1.5 1.5H3.75C1.64 28.5 0 26.86 0 24.75V9c0-.797.656-1.5 1.5-1.5.797 0 1.5.703 1.5 1.5m14.672 2.719-.89-.89c-.188-.188-.282-.47-.282-.75 0-.563.469-1.079 1.031-1.079h4.219c.375 0 .75.375.75.75v4.219c0 .562-.516 1.031-1.078 1.031-.281 0-.563-.094-.75-.281l-.89-.89-5.25 5.25c-.563.608-1.548.608-2.11 0L9.75 16.405l-2.719 2.672c-.562.61-1.547.61-2.11 0a1.445 1.445 0 0 1 0-2.11l3.75-3.75a1.445 1.445 0 0 1 2.11 0l2.719 2.673zm3 6.61c.187-.188.469-.329.75-.329.61 0 1.078.516 1.078 1.078v4.172c0 .422-.375.75-.75.75h-4.219a1.04 1.04 0 0 1-1.031-1.031c0-.282.094-.563.281-.75l.89-.89-1.64-1.642 2.157-2.109 1.593 1.64z' />
    </g>
    <defs>
      <clipPath id='5847cd93eeffb54c28591b76e9963fea__a'>
        <path d='M0 0h24v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedChartLineUpDownXlFillIcon);
export default ForwardRef;
