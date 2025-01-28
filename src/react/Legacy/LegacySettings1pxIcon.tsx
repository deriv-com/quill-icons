import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const LegacySettings1pxIcon = (
  { iconSize = 'md', title, titleId, ...props }: QuillSvgProps & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 16 16'
    {...sizes[iconSize]}
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='m15.028 6.869-.06-.375-1.145-.383q-.15-.467-.373-.902l.54-1.08-.221-.309a7.3 7.3 0 0 0-1.599-1.595l-.307-.222-1.08.54a6 6 0 0 0-.902-.373L9.5 1.028 9.128.97A7 7 0 0 0 8 .873a7 7 0 0 0-1.13.099l-.375.06-.38 1.146a6.3 6.3 0 0 0-.902.372l-1.079-.542-.307.222c-.613.443-1.15.98-1.597 1.595l-.222.31.54 1.08q-.22.434-.371.9l-1.146.379-.06.375A7 7 0 0 0 .876 8c0 .35.031.719.097 1.13l.06.375 1.145.383c.1.309.225.612.373.901l-.537 1.077.221.306c.232.322.47.605.73.865.242.244.525.483.864.732l.308.222 1.078-.541q.436.224.902.373l.38 1.147.376.06c.41.065.78.097 1.128.097s.717-.032 1.13-.097l.375-.06.38-1.147q.462-.151.9-.371l1.08.54.308-.222c.336-.242.62-.48.864-.73.255-.256.493-.54.73-.867l.222-.309-.54-1.08q.222-.434.373-.901l1.145-.383.06-.375c.065-.41.096-.78.096-1.128a6.3 6.3 0 0 0-.095-1.128m-1.023 1.119v.007c0 .211-.014.425-.04.655l-.554.184-.49.166-.15.492q-.13.428-.34.824l-.24.454.49.98a6 6 0 0 1-.434.49l-.003.004a5 5 0 0 1-.488.431l-.976-.49-.453.237a5 5 0 0 1-.835.345l-.489.153-.16.485-.184.553a5.3 5.3 0 0 1-1.309 0l-.184-.553-.161-.49-.492-.15a4.7 4.7 0 0 1-.824-.34l-.456-.238-.461.23-.52.26a5.562 5.562 0 0 1-.925-.925l.487-.977-.237-.453a5 5 0 0 1-.343-.828l-.151-.492-1.04-.346a5.3 5.3 0 0 1 0-1.31l1.037-.344.151-.491a5 5 0 0 1 .342-.831l.238-.453-.228-.458-.26-.52a6 6 0 0 1 .925-.926l.979.49.454-.24q.396-.207.832-.343l.489-.153.162-.486.184-.553c.236-.027.45-.041.654-.041q.312 0 .653.04l.347 1.036.489.152c.284.09.564.205.83.342l.454.238.977-.49c.34.274.653.585.93.927l-.488.977.234.451q.21.406.345.836l.154.49.486.162.553.184c.03.235.042.446.039.646M8.003 5.277A2.727 2.727 0 0 0 5.28 8a2.727 2.727 0 0 0 2.723 2.723A2.727 2.727 0 0 0 10.727 8a2.727 2.727 0 0 0-2.724-2.723m1.13 3.853a1.6 1.6 0 0 1-1.13.468c-.426 0-.828-.165-1.13-.468A1.6 1.6 0 0 1 6.405 8c0-.427.165-.828.468-1.13a1.6 1.6 0 0 1 1.13-.468c.427 0 .828.165 1.13.468s.469.703.469 1.13-.168.828-.47 1.13' />
    </g>
    <defs>
      <clipPath id='5e384a1b4a23e78c33d25350efb965d2__a'>
        <path d='M0 0h16v16H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LegacySettings1pxIcon);
export default ForwardRef;
