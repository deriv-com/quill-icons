import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedLocationCrosshairsSlashCaptionBoldIcon = (
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
      <path d='m.914 3.617 3.422 2.696Q5.39 5.258 6.937 5.047v-.984q.048-.516.563-.563.515.047.563.563v.984q1.546.21 2.624 1.266 1.055 1.077 1.29 2.625h.96q.516.045.563.562-.047.515-.562.563h-.961a4.8 4.8 0 0 1-.61 1.757l3.422 2.672q.375.352.094.797-.352.375-.797.094L.21 4.508q-.375-.352-.094-.797.352-.375.797-.094m4.313 3.399.914.703q.563-.445 1.359-.469.96.024 1.594.656.633.633.656 1.594 0 .492-.187.914l.914.703a3.3 3.3 0 0 0 .398-1.617q-.047-1.43-.984-2.39Q8.93 6.17 7.5 6.124q-1.335.024-2.273.89m3.398 2.648h-.023a.7.7 0 0 0 .023-.164 1.22 1.22 0 0 0-.328-.797 1.22 1.22 0 0 0-.797-.328q-.234 0-.422.07zm1.102 3.75q-.75.422-1.665.563v.96q-.045.516-.562.563-.516-.047-.562-.562v-.961q-1.548-.235-2.625-1.29-1.055-1.055-1.266-2.624h-.985q-.514-.048-.562-.563.047-.516.563-.562h.984q.023-.352.14-.68l.961.773a5 5 0 0 0-.023.469q.047 1.43.984 2.39.961.962 2.391.985.657 0 1.242-.234z' />
    </g>
    <defs>
      <clipPath id='841e58228c937a2f82383f2a1cf2b927__a'>
        <path d='M0 0h15v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedLocationCrosshairsSlashCaptionBoldIcon);
export default ForwardRef;
