import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedMessagesQuestionLgFillIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={25}
    height={30}
    viewBox='0 0 25 30'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M0 8c0-1.367 1.094-2.5 2.5-2.5h11.25c1.367 0 2.5 1.133 2.5 2.5v7.5c0 1.406-1.133 2.5-2.5 2.5H7.89l-3.163 2.383c-.196.156-.43.156-.665.078-.195-.117-.312-.313-.312-.586V18H2.5A2.47 2.47 0 0 1 0 15.5zm10 11.25h3.75c2.07 0 3.75-1.68 3.75-3.75v-5h5c1.367 0 2.5 1.133 2.5 2.5v7.5c0 1.406-1.133 2.5-2.5 2.5h-1.25v1.875c0 .273-.156.469-.352.586-.234.078-.468.078-.664-.078L17.07 23H12.5a2.47 2.47 0 0 1-2.5-2.5zM5.313 9.133l-.04.039c-.117.39.079.86.508.976.39.157.82-.039.977-.468v-.04c.039-.117.156-.156.273-.156h1.875c.274 0 .508.196.508.47a.53.53 0 0 1-.234.429l-1.446.86c-.273.116-.39.39-.39.663v.43c0 .43.351.781.781.781.39 0 .742-.351.781-.781l1.016-.586c.664-.352 1.055-1.055 1.055-1.797 0-1.133-.938-2.031-2.07-2.031H7.03c-.781 0-1.484.469-1.718 1.21m3.828 6.055c.039-.352-.157-.743-.508-.938a1.02 1.02 0 0 0-1.055 0c-.351.195-.547.586-.508.938-.039.39.157.78.508.976.313.195.742.195 1.055 0 .351-.195.547-.586.508-.977' />
    </g>
    <defs>
      <clipPath id='c8f5566a4e8ea34aedd7b885a4d1805e__a'>
        <path d='M0 0h25v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedMessagesQuestionLgFillIcon);
export default ForwardRef;
