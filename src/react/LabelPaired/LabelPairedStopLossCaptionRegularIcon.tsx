import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedStopLossCaptionRegularIcon = (
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
      <path d='M5.11 12.758c-.54 0-.985-.094-1.36-.281a2.7 2.7 0 0 1-.937-.774l.703-.656c.21.258.468.469.726.61q.387.21.914.21.598 0 .914-.281c.211-.188.305-.422.305-.727 0-.234-.07-.445-.21-.586-.142-.14-.4-.257-.774-.328l-.563-.093c-.61-.118-1.055-.305-1.36-.61C3.142 8.961 3 8.562 3 8.07c0-.28.047-.539.14-.75.118-.234.258-.422.446-.562a2 2 0 0 1 .703-.375c.258-.07.563-.117.914-.117.469 0 .867.07 1.219.257.351.141.656.399.89.704l-.703.632a2.1 2.1 0 0 0-.586-.515 2 2 0 0 0-.89-.188c-.352 0-.633.07-.82.211-.211.14-.305.352-.305.633s.094.469.234.61q.246.175.774.28l.562.118c.61.117 1.078.328 1.36.61.304.28.445.679.445 1.194 0 .282-.047.563-.14.797-.118.235-.259.446-.47.61-.187.187-.421.304-.703.398a3 3 0 0 1-.96.14m3.492-.117V6.359h1.007v5.391h2.555v.89z' />
    </g>
    <defs>
      <clipPath id='c4b5701e3a2a0080fea42dea6b9faa22__a'>
        <path d='M0 0h15v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedStopLossCaptionRegularIcon);
export default ForwardRef;
