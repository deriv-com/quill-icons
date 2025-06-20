import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedDealCancellationCaptionRegularIcon = (
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
      <path d='M2.11 6.36h2.226c.398 0 .75.07 1.078.21.328.117.61.328.844.586s.398.586.539.985c.117.398.187.843.187 1.359 0 .54-.07.984-.187 1.383-.14.398-.305.726-.54.984a2.4 2.4 0 0 1-.843.586 2.7 2.7 0 0 1-1.078.211H2.109zm2.226 5.39c.469 0 .844-.14 1.125-.445.281-.282.422-.727.422-1.29V9.009c0-.563-.14-1.008-.422-1.29-.281-.304-.656-.445-1.125-.445H3.117v4.477zm6.258 1.008c-.82 0-1.453-.281-1.922-.82-.469-.563-.703-1.36-.703-2.438 0-.516.047-.984.187-1.383.117-.398.281-.75.516-1.008.234-.28.492-.492.82-.632s.703-.211 1.102-.211c.562 0 1.008.117 1.383.351.375.235.656.61.867 1.078l-.867.47a1.44 1.44 0 0 0-.493-.727c-.234-.165-.515-.258-.89-.258-.469 0-.867.164-1.125.492-.281.328-.422.773-.422 1.36v.96c0 .586.14 1.031.422 1.36.258.328.656.492 1.125.492.375 0 .703-.094.937-.281s.399-.446.516-.75l.82.492c-.21.445-.492.82-.867 1.078-.398.258-.844.375-1.406.375' />
    </g>
    <defs>
      <clipPath id='f59c6f5e54a93a161e8f91a6cdf77f0b__a'>
        <path d='M0 0h15v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedDealCancellationCaptionRegularIcon);
export default ForwardRef;
