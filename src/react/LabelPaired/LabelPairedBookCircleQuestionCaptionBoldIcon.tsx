import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedBookCircleQuestionCaptionBoldIcon = (
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
      <path d='M0 5.563C0 4.438.914 3.5 2.063 3.5h7.124c.704 0 1.313.61 1.313 1.313v3.351a3.5 3.5 0 0 0-1.125.516V4.813a.2.2 0 0 0-.187-.188H2.061a.925.925 0 0 0-.937.938v6.351c.21-.094.469-.164.75-.164H7.5v.375c0 .258.023.516.047.75H1.875a.755.755 0 0 0-.75.75c0 .422.328.75.75.75h6.281c.281.445.656.844 1.078 1.125H1.875A1.85 1.85 0 0 1 0 13.625V5.562m3 1.125c0-.305.234-.563.563-.563h4.124a.57.57 0 0 1 .563.563.555.555 0 0 1-.562.562H3.563A.54.54 0 0 1 3 6.688m0 1.875C3 8.258 3.234 8 3.563 8h4.124a.57.57 0 0 1 .563.563.555.555 0 0 1-.562.562H3.563A.54.54 0 0 1 3 8.563m5.25 3.562c0-1.852 1.5-3.375 3.375-3.375A3.39 3.39 0 0 1 15 12.125a3.376 3.376 0 0 1-3.375 3.375 3.36 3.36 0 0 1-3.375-3.375m1.875-1.078v.14c0 .211.164.376.375.376a.385.385 0 0 0 .375-.376v-.14c0-.117.094-.235.21-.235h.962c.164 0 .328.165.328.329 0 .14-.07.234-.187.304l-.75.375a.41.41 0 0 0-.188.352v.328c0 .21.164.375.375.375A.385.385 0 0 0 12 12.5v-.117l.54-.281c.35-.188.585-.563.585-.961 0-.586-.492-1.055-1.078-1.055h-.961a.95.95 0 0 0-.961.96m.938 2.765c0 .329.234.563.562.563a.555.555 0 0 0 .563-.562.57.57 0 0 0-.563-.563.555.555 0 0 0-.562.563' />
    </g>
    <defs>
      <clipPath id='18aa32faa8387be261907fdabbba38d5__a'>
        <path d='M0 0h15v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedBookCircleQuestionCaptionBoldIcon);
export default ForwardRef;
