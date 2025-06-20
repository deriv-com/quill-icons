import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedPasskeyCaptionFillIcon = (
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
      <path d='M2.555 14.14v-1.85c0-.352.093-.68.304-.985.188-.305.422-.54.75-.703a8.3 8.3 0 0 1 1.664-.61 8.3 8.3 0 0 1 1.711-.187h.54l.562.07q-.07.81.281 1.547c.258.469.61.867 1.055 1.148v1.57zm8.718 1.196-.843-.82V11.96a1.93 1.93 0 0 1-.985-.68 1.9 1.9 0 0 1-.375-1.172c0-.539.188-.984.563-1.359a1.84 1.84 0 0 1 1.36-.562c.538 0 .984.187 1.359.562s.562.844.562 1.36c0 .421-.117.773-.328 1.1-.234.306-.516.54-.89.68l.679.704-.844.82.844.82zM6.984 9.289a2.35 2.35 0 0 1-1.71-.703 2.35 2.35 0 0 1-.704-1.711c0-.68.235-1.242.703-1.71a2.35 2.35 0 0 1 1.711-.704c.68 0 1.243.234 1.711.703.492.469.727 1.055.727 1.711s-.235 1.242-.727 1.71a2.32 2.32 0 0 1-1.71.704m4.008 1.102c.211 0 .399-.094.516-.258a.65.65 0 0 0 0-.586c-.117-.164-.305-.281-.516-.258-.21-.023-.398.094-.515.258a.65.65 0 0 0 0 .586.62.62 0 0 0 .515.258' />
    </g>
    <defs>
      <clipPath id='24416fe6c641d0148bc4fe5c1331e2be__a'>
        <path d='M0 0h15v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedPasskeyCaptionFillIcon);
export default ForwardRef;
