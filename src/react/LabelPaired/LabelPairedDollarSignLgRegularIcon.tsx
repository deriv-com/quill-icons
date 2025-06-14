import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedDollarSignLgRegularIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={13}
    height={30}
    viewBox='0 0 13 30'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M7.125 6.125v1.914c1.21.117 2.422.352 3.242.586a.6.6 0 0 1 .469.742.6.6 0 0 1-.742.469c-1.29-.313-3.203-.703-4.844-.547-.82.078-1.562.274-2.07.586-.508.352-.86.82-1.016 1.602-.117.546-.039.976.117 1.289.156.351.43.625.86.898.859.547 2.109.86 3.515 1.25h.04c1.327.352 2.773.742 3.827 1.406.547.352 1.016.782 1.29 1.367q.468.938.234 2.11c-.274 1.328-1.211 2.226-2.461 2.734-.703.274-1.563.43-2.461.469v1.875a.617.617 0 0 1-.625.625.617.617 0 0 1-.625-.625v-1.914c-.234-.04-.508-.04-.742-.078-1.016-.156-2.578-.508-3.906-1.094-.313-.117-.43-.508-.313-.82.156-.313.508-.469.82-.313 1.172.508 2.618.82 3.555.977 1.524.234 2.852.117 3.828-.274.977-.39 1.524-.976 1.68-1.797.117-.585.039-.976-.117-1.328a2 2 0 0 0-.86-.859c-.86-.547-2.11-.898-3.476-1.25l-.078-.04c-1.328-.312-2.774-.702-3.79-1.366a3.8 3.8 0 0 1-1.328-1.406q-.41-.88-.234-2.11c.234-1.094.781-1.836 1.563-2.383.78-.468 1.718-.703 2.656-.78.234-.04.469-.04.742-.04V6.125c0-.312.273-.625.625-.625.313 0 .625.313.625.625' />
    </g>
    <defs>
      <clipPath id='e4465f0d85f2a0c9ce5060f2e88d038f__a'>
        <path d='M0 0h13v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedDollarSignLgRegularIcon);
export default ForwardRef;
