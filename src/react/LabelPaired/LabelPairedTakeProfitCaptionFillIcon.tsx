import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedTakeProfitCaptionFillIcon = (
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
      <path d='M5.602 13.04V7.976h1.687v-1.97H1.781v1.97H3.47v5.062zm1.875-7.032h3.351c.328 0 .656.07.938.187.28.117.515.282.726.492s.352.47.469.774c.094.281.14.61.14.937 0 .329-.046.657-.14.938-.117.305-.258.539-.469.773-.21.211-.445.375-.726.493-.282.117-.61.164-.938.164H9.61v2.273H7.477zM10.875 8c-.023-.023-.07-.047-.21-.047H9.608v.89h1.055c.14 0 .211-.046.234-.07.024-.023.047-.046.047-.187v-.399c0-.117-.023-.164-.047-.164z' />
    </g>
    <defs>
      <clipPath id='510ce0f500fc0e2ced1b7207c8a538b9__a'>
        <path d='M0 0h15v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedTakeProfitCaptionFillIcon);
export default ForwardRef;
