import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedLifeRingCaptionFillIcon = (
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
      <path d='m8.602 13.18-1.36-1.36c-.375.211-.797.305-1.242.305-.469 0-.89-.094-1.266-.305l-1.359 1.36a4.571 4.571 0 0 0 5.227 0m2.109.023h.023c.211.281.164.703-.093.961a.75.75 0 0 1-.961.07A5.98 5.98 0 0 1 6 15.5a6 6 0 0 1-3.703-1.266.75.75 0 0 1-.961-.07.75.75 0 0 1-.07-.96A6 6 0 0 1 0 9.5c0-1.383.469-2.648 1.266-3.68a.75.75 0 0 1 .07-.96c.258-.258.68-.305.96-.094C3.329 3.992 4.595 3.5 6 3.5c1.383 0 2.648.492 3.68 1.266.28-.211.703-.164.96.093.258.258.282.68.07.961a5.98 5.98 0 0 1 1.267 3.68 6 6 0 0 1-1.266 3.703m-1.055-1.078c.516-.75.844-1.64.844-2.625 0-.96-.328-1.852-.844-2.602l-1.36 1.36c.212.375.306.797.306 1.242 0 .469-.094.89-.305 1.266zM8.602 5.844C7.852 5.328 6.96 5 6 5c-.984 0-1.875.328-2.625.844l1.36 1.36c.374-.212.796-.329 1.242-.329.468 0 .89.117 1.265.328zM3.68 10.766a2.5 2.5 0 0 1-.305-1.243c0-.468.094-.89.305-1.265l-1.36-1.36a4.57 4.57 0 0 0 0 5.227zM4.875 9.5c0 .422.21.773.563.984.328.211.773.211 1.125 0 .328-.21.562-.562.562-.984 0-.398-.234-.75-.562-.96a1.08 1.08 0 0 0-1.125 0c-.352.21-.563.562-.563.96' />
    </g>
    <defs>
      <clipPath id='aced238575a40b6ebe59e762797e245c__a'>
        <path d='M0 0h12v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedLifeRingCaptionFillIcon);
export default ForwardRef;
