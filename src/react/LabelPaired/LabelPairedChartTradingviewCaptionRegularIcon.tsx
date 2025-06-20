import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedChartTradingviewCaptionRegularIcon = (
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
      <path d='M2.543 14.398V4.555a.36.36 0 0 1 .352-.352c.21 0 .351.164.351.352v9.586c0 .375.305.656.68.656h8.156a.36.36 0 0 1 .352.351.345.345 0 0 1-.352.352H3.645c-.61 0-1.102-.469-1.102-1.102M12.34 8.54a.42.42 0 0 0-.516 0l-3.633 3.656-.914-.914c-.28-.281-.726-.281-.984 0l-1.523 1.5a.37.37 0 0 0 0 .516c.14.14.351.14.492 0l1.523-1.524.914.915c.281.28.727.28.985 0l3.656-3.633a.37.37 0 0 0 0-.516M8.45 6.125c0-.258-.235-.492-.516-.492s-.516.234-.516.492a.5.5 0 0 0 .516.492.5.5 0 0 0 .515-.492m.398-.492L7.793 8.445h.773l1.032-2.812zm-3.47 0v.633H6.48v2.18h.68V5.632z' />
    </g>
    <defs>
      <clipPath id='aa92e2f6408671d07f83c14eb2f7937c__a'>
        <path d='M0 0h15v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedChartTradingviewCaptionRegularIcon);
export default ForwardRef;
