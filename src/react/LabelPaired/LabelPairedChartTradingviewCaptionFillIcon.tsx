import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedChartTradingviewCaptionFillIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={15}
    height={18}
    viewBox='0 0 15 18'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M12.516 8.234a.723.723 0 0 1 0 1.055l-3.493 3.492a1.13 1.13 0 0 1-1.57 0l-.703-.703-.984.961a.723.723 0 0 1-1.055 0 .723.723 0 0 1 0-1.055l1.242-1.242a1.09 1.09 0 0 1 1.57 0l.727.703 3.21-3.21a.723.723 0 0 1 1.056 0M8.696 5.54c0 .281-.258.516-.54.516-.304 0-.562-.235-.562-.516s.258-.516.562-.516c.281 0 .54.235.54.516M9.116 5h.82L8.837 8h-.82zm-3.68 0h1.899v3h-.727V5.68H5.438zM3 3.5c.398 0 .75.352.75.75v9.54c0 .116.094.21.234.21h8.391c.398 0 .75.352.75.75 0 .422-.352.75-.75.75H3.422c-.68 0-1.172-.492-1.172-1.172V4.25c0-.398.328-.75.75-.75' />
    </g>
    <defs>
      <clipPath id='eaf069c0a1ec0e594e6264d96933ada3__a'>
        <path d='M0 0h15v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedChartTradingviewCaptionFillIcon);
export default ForwardRef;
