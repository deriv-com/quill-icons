import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedHandGestureTapRightCaptionBoldIcon = (
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
      <path d='M11.766 8c0 .703-.47 1.29-1.125 1.453L9.586 11.68c.047.093.094.187.117.258l.164.374c.14.329.117.704-.023 1.032l-.07.14a2.23 2.23 0 0 1-1.829 1.266h-.047a2.35 2.35 0 0 1-1.125-.21l-1.664-.798a1.72 1.72 0 0 1-.843-2.32l.656-1.383c.21-.469.797-.68 1.242-.445.024 0 .047.023.07.023l.047.047a.96.96 0 0 1 .938-.094c.07.047.14.07.21.117a.96.96 0 0 1 .938-.093c.024.023.047.023.07.047l.024.023.469-.96A1.4 1.4 0 0 1 8.766 8c0-.82.68-1.5 1.5-1.5s1.5.68 1.5 1.5m-1.43-.07c.281.14.469.375.516.656a.83.83 0 0 0-.586-1.406.81.81 0 0 0-.82.797.92.92 0 0 1 .89-.047M8.39 12.594l1.476-3.14.281-.634a.235.235 0 0 0-.117-.258c-.094-.046-.234 0-.304.07l-.282.634-.586 1.218a.33.33 0 0 1-.351.188.305.305 0 0 1-.305-.258c-.023-.094-.07-.14-.14-.164-.094-.047-.258-.023-.305.094l-.047.117c-.07.117-.211.21-.352.187-.164 0-.28-.14-.304-.28a.32.32 0 0 0-.14-.165c-.118-.047-.259 0-.306.117a.37.37 0 0 1-.304.188.41.41 0 0 1-.328-.164.3.3 0 0 0-.118-.117c-.093-.047-.257 0-.304.117l-.657 1.383c-.234.515-.023 1.148.493 1.382l1.687.797q.351.176.774.14h.046a1.52 1.52 0 0 0 1.243-.866l.07-.14a.55.55 0 0 0 0-.47l-.14-.351-.258.562c-.07.117-.211.164-.329.117-.093-.046-.164-.187-.093-.304m4.007-8.344c.188 0 .352.164.352.328v9.867c0 .164-.164.328-.352.328a.335.335 0 0 1-.328-.328V4.578c0-.164.14-.328.328-.328' />
    </g>
    <defs>
      <clipPath id='daf15ded21e5c2bc0cc1daa59065bae7__a'>
        <path d='M0 0h15v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedHandGestureTapRightCaptionBoldIcon);
export default ForwardRef;