import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedDealProtectionLgFillIcon = (
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
      <path d='M12.969 9.719h5.586c.547 0 1.093.078 1.562.273s.86.469 1.211.82c.313.391.586.82.781 1.29.157.507.235 1.015.235 1.562 0 .586-.078 1.094-.235 1.602a4.5 4.5 0 0 1-.78 1.25 3.7 3.7 0 0 1-1.212.82 4.1 4.1 0 0 1-1.562.312h-2.07v3.79h-3.516zm5.664 3.32c-.04-.039-.117-.117-.352-.117h-1.797v1.484h1.797c.235 0 .313-.039.352-.078s.117-.117.117-.312v-.664c0-.235-.078-.274-.078-.313zM7.07 9.72c.742 0 1.485.117 2.11.351.664.274 1.25.625 1.718 1.133q.704.762 1.055 1.875c.235.742.352 1.563.352 2.5q0 1.348-.352 2.461-.351 1.113-1.055 1.875a4.3 4.3 0 0 1-1.718 1.133 6 6 0 0 1-2.11.39H2.5V9.72zm1.172 8.047c.235-.235.39-.625.39-1.407v-1.601c0-.781-.155-1.172-.39-1.406-.234-.235-.586-.391-1.172-.391H6.055v5.195H7.07c.586 0 .938-.156 1.172-.39' />
    </g>
    <defs>
      <clipPath id='20d5d21925d9cbc6e96b04d864873986__a'>
        <path d='M0 0h25v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedDealProtectionLgFillIcon);
export default ForwardRef;
