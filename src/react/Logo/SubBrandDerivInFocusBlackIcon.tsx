import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SubBrandDerivInFocusBlackIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 411 59'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g fill='#414652'>
      <path d='m34.986 1.829-2.99 16.955H21.618c-9.682 0-18.911 7.845-20.622 17.527l-.724 4.12C-1.43 50.115 5.03 57.96 14.712 57.96h8.656c7.057 0 13.78-5.713 15.021-12.77L46.361 0zM27.622 43.59c-.382 2.18-2.344 3.954-4.524 3.954h-5.26c-4.351 0-7.263-3.533-6.5-7.893l.454-2.57c.772-4.351 4.925-7.892 9.277-7.892h9.092zm87.292 14.367 6.81-38.634h10.772l-6.81 38.634h-10.781zm1.165-38.188-1.622 9.193c-5.104-1.586-10.369-1.081-11.987-.759q-2.621 14.881-5.245 29.764h-10.78L92.91 21.32c3.506-1.452 12.115-4.399 23.169-1.55m-43.677-.993h-8.385c-8.17 0-15.96 6.62-17.4 14.79l-1.694 9.603c-1.44 8.17 4.01 14.79 12.18 14.79h17.838l1.83-10.382H60.006c-2.72 0-4.543-2.204-4.057-4.933l.055-.326h27.027l1.543-8.752c1.44-8.17-4.01-14.79-12.18-14.79zm1.36 13.963-.063.557H57.63l.087-.493c.485-2.721 2.968-5.116 5.696-5.116h6.277c2.698 0 4.52 2.355 4.074 5.052m100.765-13.416c-3.672 9.763-12.088 26.371-20.24 38.634h-10.78c-3.742-11.671-6.158-27.933-6.619-38.634h10.78c.194 3.49 1.757 16.438 3.54 25.483 4.892-8.8 10.284-20.345 12.531-25.483zM189.192 8.104h6.984V58h-6.984zM205.216 21.64q2.304-.576 6.12-1.224t8.784-.648q4.464 0 7.416 1.296 2.952 1.224 4.68 3.528 1.8 2.232 2.52 5.4t.72 6.984V58h-6.696V38.416q0-3.456-.504-5.904-.432-2.448-1.512-3.96t-2.88-2.16q-1.8-.72-4.464-.72-1.08 0-2.232.072a32 32 0 0 0-2.232.216q-1.008.072-1.872.216-.792.144-1.152.216V58h-6.696zM244.112 58V8.104h30.096v5.976h-23.112v15.048h20.52v5.904h-20.52V58zM311.535 39.28q0 4.464-1.296 8.064t-3.672 6.192a16 16 0 0 1-5.544 4.032q-3.24 1.368-7.056 1.368t-7.056-1.368a16.8 16.8 0 0 1-5.616-4.032q-2.304-2.592-3.6-6.192t-1.296-8.064q0-4.392 1.296-7.992 1.296-3.672 3.6-6.264a15.95 15.95 0 0 1 5.616-3.96q3.24-1.44 7.056-1.44t7.056 1.44a15.3 15.3 0 0 1 5.544 3.96q2.376 2.592 3.672 6.264 1.296 3.6 1.296 7.992m-6.984 0q0-6.336-2.88-10.008-2.808-3.744-7.704-3.744t-7.776 3.744q-2.808 3.672-2.808 10.008t2.808 10.08q2.88 3.672 7.776 3.672t7.704-3.672q2.88-3.744 2.88-10.08M334.348 58.864q-4.536 0-7.992-1.44-3.384-1.44-5.76-4.032-2.304-2.592-3.456-6.12-1.152-3.6-1.152-7.92t1.224-7.92q1.296-3.6 3.6-6.192 2.304-2.664 5.616-4.104 3.384-1.512 7.488-1.512 2.52 0 5.04.432t4.824 1.368l-1.512 5.688q-1.512-.72-3.528-1.152-1.944-.432-4.176-.432-5.616 0-8.64 3.528-2.952 3.528-2.952 10.296 0 3.024.648 5.544.72 2.52 2.16 4.32 1.512 1.8 3.816 2.808 2.304.936 5.616.936 2.664 0 4.824-.504t3.384-1.08l.936 5.616q-.576.36-1.656.72-1.08.288-2.448.504-1.368.288-2.952.432a21 21 0 0 1-2.952.216M378.473 56.92q-2.304.576-6.12 1.224-3.744.648-8.712.648-4.32 0-7.272-1.224-2.952-1.296-4.752-3.6t-2.592-5.4q-.792-3.168-.792-6.984V20.56h6.696v19.584q0 6.84 2.16 9.792t7.272 2.952q1.08 0 2.232-.072t2.16-.144a36 36 0 0 1 1.8-.216q.864-.144 1.224-.288V20.56h6.696zM395.84 53.176q4.104 0 6.048-1.08 2.016-1.08 2.016-3.456 0-2.448-1.944-3.888t-6.408-3.24a186 186 0 0 1-4.176-1.728q-1.944-.936-3.384-2.16a9.3 9.3 0 0 1-2.304-2.952q-.864-1.728-.864-4.248 0-4.968 3.672-7.848 3.672-2.952 10.008-2.952 1.584 0 3.168.216 1.584.144 2.952.432 1.368.216 2.376.504 1.08.288 1.656.504l-1.224 5.76q-1.08-.576-3.384-1.152-2.304-.648-5.544-.648-2.808 0-4.896 1.152-2.088 1.08-2.088 3.456 0 1.224.432 2.16.504.936 1.44 1.728 1.008.72 2.448 1.368t3.456 1.368a59 59 0 0 1 4.752 2.016q2.088.936 3.528 2.232a8.45 8.45 0 0 1 2.304 3.168q.792 1.8.792 4.464 0 5.184-3.888 7.848-3.816 2.664-10.944 2.664-4.968 0-7.776-.864-2.808-.792-3.816-1.224l1.224-5.76q1.152.432 3.672 1.296t6.696.864' />
    </g>
  </svg>
);
const ForwardRef = forwardRef(SubBrandDerivInFocusBlackIcon);
export default ForwardRef;
