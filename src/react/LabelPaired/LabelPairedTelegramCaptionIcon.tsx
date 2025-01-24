import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedTelegramCaptionIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={12}
    height={18}
    viewBox='0 0 12 18'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M6 3.688c3.188 0 5.813 2.625 5.813 5.812 0 3.21-2.626 5.813-5.813 5.813A5.81 5.81 0 0 1 .188 9.5C.188 6.313 2.789 3.688 6 3.688m2.672 3.96a.4.4 0 0 0 0-.234c0-.047-.047-.117-.07-.14-.07-.07-.188-.07-.235-.07-.21 0-.562.116-2.18.796-.562.234-1.687.703-3.375 1.453-.28.117-.421.211-.445.328-.023.188.281.258.633.375.305.094.703.211.914.211.188 0 .398-.07.633-.234 1.57-1.078 2.39-1.617 2.437-1.617s.094-.024.118 0c.046.046.046.093.023.117-.023.117-1.5 1.476-1.594 1.57-.328.328-.703.54-.117.914.492.328.774.54 1.29.867.327.211.585.47.913.446.164-.024.328-.164.399-.61.21-1.008.586-3.258.656-4.172' />
    </g>
    <defs>
      <clipPath id='851fee21cce684f837e9f0f44faa652d__a'>
        <path d='M0 0h12v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedTelegramCaptionIcon);
export default ForwardRef;
