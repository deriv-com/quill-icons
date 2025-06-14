import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedThumbsUpCaptionBoldIcon = (
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
      <path d='M7.57 4.32a1.683 1.683 0 0 1 1.172 2.086l-.14.469c-.07.258-.165.516-.282.75h2.18c.82 0 1.5.68 1.5 1.5 0 .422-.187.797-.445 1.078.047.14.07.281.07.445 0 .47-.234.915-.61 1.196.024.094.047.187.047.304 0 .47-.234.891-.562 1.172-.047.797-.703 1.453-1.5 1.453H6.703a2.65 2.65 0 0 1-1.453-.445l-1.453-.96a.565.565 0 0 1-.14-.798.54.54 0 0 1 .773-.14l1.453.96c.234.165.515.258.82.258H9a.4.4 0 0 0 .375-.375c0-.046-.023-.07-.023-.117a.586.586 0 0 1 .328-.68c.14-.046.258-.187.258-.328a.36.36 0 0 0-.094-.234.6.6 0 0 1-.07-.562c.046-.188.21-.305.421-.352.164-.023.305-.187.305-.375 0-.094-.047-.164-.094-.234a.53.53 0 0 1-.14-.516.6.6 0 0 1 .351-.398.38.38 0 0 0 .258-.352.4.4 0 0 0-.375-.375H7.36a.55.55 0 0 1-.493-.305c-.094-.187-.094-.398.024-.562.28-.399.492-.844.632-1.313l.141-.468a.587.587 0 0 0-.398-.704.587.587 0 0 0-.703.399l-.118.469q-.21.702-.703 1.265L4.523 8.844a.56.56 0 0 1-.796.047.58.58 0 0 1-.024-.797L4.898 6.78c.211-.234.375-.515.47-.82l.116-.469A1.683 1.683 0 0 1 7.57 4.32M.75 8h1.5c.398 0 .75.352.75.75V14c0 .422-.352.75-.75.75H.75A.74.74 0 0 1 0 14V8.75C0 8.352.328 8 .75 8' />
    </g>
    <defs>
      <clipPath id='57ed6852e3635bccb32760d5bc27b30c__a'>
        <path d='M0 0h12v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedThumbsUpCaptionBoldIcon);
export default ForwardRef;
