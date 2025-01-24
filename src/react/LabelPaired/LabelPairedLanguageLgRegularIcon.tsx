import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedLanguageLgRegularIcon = (
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
      <path d='M11.875 9.25H2.5c-.703 0-1.25.586-1.25 1.25v10c0 .703.547 1.25 1.25 1.25h9.375zm1.25 0v12.5H22.5c.664 0 1.25-.547 1.25-1.25v-10c0-.664-.586-1.25-1.25-1.25zM25 10.5v10c0 1.406-1.133 2.5-2.5 2.5h-20A2.47 2.47 0 0 1 0 20.5v-10C0 9.133 1.094 8 2.5 8h20c1.367 0 2.5 1.133 2.5 2.5M6.797 12.18l2.5 6.25c.156.312 0 .664-.352.78-.312.157-.664 0-.78-.35l-.352-.82H4.648l-.351.82c-.117.35-.469.507-.781.35-.352-.116-.508-.468-.352-.78l2.5-6.25a.59.59 0 0 1 .586-.43c.234 0 .469.156.547.43m-.547 1.914L5.156 16.75h2.149zm13.125-1.719V13h2.5c.313 0 .625.313.625.625a.64.64 0 0 1-.625.625h-.195l-.157.469c-.39 1.015-.976 1.953-1.718 2.695.117.078.234.156.39.234l.742.47c.274.155.391.546.196.859a.62.62 0 0 1-.86.195l-.742-.43c-.234-.156-.468-.312-.703-.508-.312.235-.664.43-1.015.625l-.665.352c-.312.156-.703 0-.859-.313-.156-.273 0-.664.273-.82l.704-.351c.195-.079.39-.196.586-.313l-.82-.82c-.235-.274-.235-.664 0-.899.273-.234.663-.234.898 0l.898.899c.664-.625 1.172-1.407 1.524-2.305v-.039h-4.727a.617.617 0 0 1-.625-.625c0-.312.273-.625.625-.625h2.5v-.625c0-.312.273-.625.625-.625.313 0 .625.313.625.625' />
    </g>
    <defs>
      <clipPath id='bb7bb3ee023eb5c8ddf87dedd542722e__a'>
        <path d='M0 0h25v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedLanguageLgRegularIcon);
export default ForwardRef;
