import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedGearCaptionRegularIcon = (
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
      <path d='m5.227 4.39-.305 1.102a1 1 0 0 1-.54.633 3 3 0 0 0-.491.281q-.352.235-.797.164l-1.149-.28a.1.1 0 0 0-.093 0 4 4 0 0 0-.352.515l-.094.164q-.14.258-.258.539 0 .046.047.094l.797.843q.305.33.281.774a2 2 0 0 0-.023.281q0 .14.023.305a.99.99 0 0 1-.28.75l-.798.843q-.045.024-.07.094.117.281.281.54l.094.163q.165.282.352.516a.1.1 0 0 0 .093 0l1.125-.281q.469-.07.797.164.258.164.516.281.375.188.539.633l.305 1.101q.023.048.07.094a5.3 5.3 0 0 0 1.406 0 .4.4 0 0 0 .07-.094l.305-1.101a1 1 0 0 1 .54-.633q.257-.117.515-.281.351-.234.773-.164l1.149.28a.1.1 0 0 0 .093 0q.188-.233.352-.515l.094-.164q.141-.258.258-.539 0-.07-.047-.094l-.797-.843a.91.91 0 0 1-.258-.75v-.586a.94.94 0 0 1 .258-.774l.797-.843q.046-.024.07-.094a3.5 3.5 0 0 0-.281-.54l-.094-.163a4 4 0 0 0-.352-.516.1.1 0 0 0-.093 0L8.93 6.57q-.469.07-.797-.164a4 4 0 0 0-.516-.281 1.1 1.1 0 0 1-.539-.61l-.305-1.124a.4.4 0 0 0-.07-.094 5.3 5.3 0 0 0-1.406 0 .4.4 0 0 0-.07.094M6 3.5q.47 0 .89.07.072 0 .118.047.35.165.469.563l.328 1.125q.023.07.14.14.305.14.61.352a.4.4 0 0 0 .187.047l1.125-.282a.9.9 0 0 1 .727.118q.046.023.094.07.257.305.468.656l.094.188q.187.351.328.726.024.047.047.117 0 .399-.281.704l-.797.82a.25.25 0 0 0-.07.187q.023.165.023.352t-.023.352q0 .117.07.187l.797.844a.93.93 0 0 1 .281.68 1 1 0 0 1-.047.117 6 6 0 0 1-.328.726l-.094.188h-.023a3.7 3.7 0 0 1-.445.656.4.4 0 0 1-.094.07q-.328.211-.727.14l-1.125-.28a.27.27 0 0 0-.187.023q-.305.21-.61.352-.117.07-.14.14l-.328 1.125a.93.93 0 0 1-.47.586.3.3 0 0 1-.116.024q-.422.07-.891.07t-.89-.07a.3.3 0 0 1-.118-.024.93.93 0 0 1-.469-.586l-.328-1.125q-.023-.07-.14-.14a4 4 0 0 1-.61-.352.27.27 0 0 0-.187-.023l-1.125.28a1.05 1.05 0 0 1-.727-.116l-.093-.094a3.7 3.7 0 0 1-.446-.656H.844l-.094-.188a6 6 0 0 1-.328-.726.3.3 0 0 1-.024-.117.9.9 0 0 1 .258-.68l.797-.844a.25.25 0 0 0 .07-.187A2.5 2.5 0 0 1 1.5 9.5v-.164a.8.8 0 0 1 .023-.188.25.25 0 0 0-.07-.187l-.797-.82a1 1 0 0 1-.281-.703 1 1 0 0 1 .047-.118q.14-.375.328-.726l.094-.188h.023q.188-.351.446-.656a.4.4 0 0 1 .093-.07q.328-.21.727-.117l1.125.28a.4.4 0 0 0 .187-.046q.305-.21.61-.352.117-.07.14-.14l.328-1.125a.85.85 0 0 1 .47-.563.16.16 0 0 1 .116-.047Q5.532 3.5 6 3.5m-1.312 6q.023.75.656 1.125.656.375 1.312 0 .632-.375.657-1.125-.024-.75-.657-1.125Q6 8 5.344 8.375q-.632.375-.657 1.125m3.375 0q-.048 1.172-1.032 1.781-1.031.563-2.062 0-.985-.61-1.032-1.781.048-1.172 1.032-1.781 1.031-.562 2.062 0 .985.61 1.032 1.781' />
    </g>
    <defs>
      <clipPath id='64e3f61ab04a5436b3b03fb1595e780c__a'>
        <path d='M0 0h12v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedGearCaptionRegularIcon);
export default ForwardRef;
