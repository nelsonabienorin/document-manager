import React, { PropTypes } from 'react';
import moment from 'moment';
import {Link} from 'react-router';
import DocumentTitle from '../components/DocumentListTitle';
import DocumentContent from '../components/DocumentContent';


const DocumentList = ({ documents }) => {
  const doc = documents.rows;
  return (
    <div className="row">
    {doc.map(document =>
    <div key={document.id}>
        <div className="col s3">
          <div className="card white darken-1" style={{ height: 275 }}>
            <div className="card-content black-text">
              <DocumentTitle document={document} />
              <DocumentContent document={document} />
            </div>
            <div className="card-action">
              <a>Published: {moment(document.createdAt).format('MMMM Do YYYY')}</a> <br/>
            </div>
            <div className="card-action">
              <Link className="btn-floating btn-large blue darken-4 right" to={`/documents/${document.id}`}><i className="large material-icons">mode_edit</i></Link>
              &nbsp; <Link className="btn-floating btn-large red right" to={`/documents/${document.id}`}><i className="large material-icons">delete</i></Link>
            </div>
          </div>
        </div>
        <div id="modal1" className="modal">
        <div className="modal-content">
        <h4>Modal Header</h4>
        <p>A bunch of text</p>
        </div>
        <div className="modal-footer">
        <a href="#!" className="modal-action modal-close waves-effect waves-green btn-flat">Agree</a>
        </div>
        </div>
      </div>
      )}
      </div>
  );
};

export default DocumentList;
