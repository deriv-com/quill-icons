import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedGlobeCaptionFillIcon = (
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
      <path d='M8.25 9.5c0 .54-.047 1.031-.094 1.5H3.82c-.047-.469-.07-.96-.07-1.5 0-.516.023-1.008.07-1.5h4.336c.047.492.094.984.094 1.5M8.906 8h2.883c.14.492.211.984.211 1.5 0 .54-.07 1.031-.21 1.5H8.905c.047-.469.094-.984.094-1.5S8.953 8.492 8.906 8m2.649-.75H8.813c-.235-1.477-.704-2.742-1.29-3.54a6.04 6.04 0 0 1 4.032 3.54m-3.492 0H3.914a10 10 0 0 1 .633-2.203c.258-.563.516-.961.797-1.219.258-.234.468-.328.656-.328.164 0 .375.094.633.328.281.258.539.656.797 1.219.258.61.492 1.36.633 2.203m-4.899 0H.422a6.04 6.04 0 0 1 4.031-3.54c-.586.798-1.055 2.063-1.289 3.54M.188 8H3.07c-.047.492-.07.984-.07 1.5s.023 1.031.07 1.5H.188C.047 10.531 0 10.04 0 9.5 0 8.984.047 8.492.188 8m4.359 5.977a9.7 9.7 0 0 1-.633-2.227h4.149a9.7 9.7 0 0 1-.633 2.227c-.258.562-.516.96-.797 1.218-.258.235-.469.305-.633.305-.187 0-.398-.07-.656-.305-.282-.258-.54-.656-.797-1.218M3.164 11.75c.234 1.5.703 2.766 1.29 3.563A6.02 6.02 0 0 1 .421 11.75zm8.39 0a6.02 6.02 0 0 1-4.03 3.563c.609-.797 1.054-2.063 1.289-3.563z' />
    </g>
    <defs>
      <clipPath id='fa3e27982e4b0176fac2ec1e0e23e83a__a'>
        <path d='M0 0h12v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedGlobeCaptionFillIcon);
export default ForwardRef;
