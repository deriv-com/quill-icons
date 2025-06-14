import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedArrowDownOneNineCaptionBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={14}
    height={18}
    viewBox='0 0 14 18'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M10.938 4.813v2.812h.562a.57.57 0 0 1 .563.563.555.555 0 0 1-.563.562H9.25a.54.54 0 0 1-.562-.562c0-.305.234-.563.562-.563h.563V5.61l-.399.117a.55.55 0 0 1-.703-.352c-.094-.305.047-.61.351-.703l1.126-.375a.52.52 0 0 1 .515.07c.14.094.235.281.235.446m-7.336 9.773-2.25-2.25c-.235-.211-.235-.563 0-.797.21-.21.562-.21.796 0l1.29 1.313v-8.04c0-.304.234-.562.562-.562a.57.57 0 0 1 .563.563v8.039l1.289-1.29a.513.513 0 0 1 .773 0 .513.513 0 0 1 0 .774l-2.25 2.25a.513.513 0 0 1-.773 0m6.586-2.086a.89.89 0 0 0 .796-.469.95.95 0 0 0 0-.937.94.94 0 0 0-.796-.469.95.95 0 0 0-.82.469.95.95 0 0 0 0 .937c.163.305.468.469.82.469m-.422 1.102a2.09 2.09 0 0 1-1.641-2.04c0-1.124.914-2.062 2.063-2.062a2.08 2.08 0 0 1 2.062 2.063c0 .515-.187.984-.492 1.359l-1.336 1.64c-.188.235-.54.258-.797.07-.234-.187-.258-.538-.07-.796z' />
    </g>
    <defs>
      <clipPath id='34b7ee2840b6613ca76a1a4a727258c7__a'>
        <path d='M0 0h14v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedArrowDownOneNineCaptionBoldIcon);
export default ForwardRef;
